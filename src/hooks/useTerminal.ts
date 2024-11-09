import { useState, useCallback } from 'react';
import { TerminalState, TerminalHistory } from '../types/terminal';
import { executeCommand } from '../utils/executeCommand';
import { fileSystem } from '../utils/fileSystem';
import { initialState } from '../utils/initialState';

export const useTerminal = () => {
    const [state, setState] = useState<TerminalState>(initialState);

    const processCommand = useCallback((command: string) => {
        const newHistory: TerminalHistory = {
            command,
            output: '',
        };

        // Process the command and get output
        const output = executeCommand(command, state.currentDirectory);

        // Handle clear command
        if (output === '__CLEAR__') {
            setState(prev => ({
                ...prev,
                history: [],
                commandHistory: [...prev.commandHistory, command],
                historyIndex: prev.commandHistory.length,
            }));
            return;
        }

        // Update terminal state for other commands
        setState(prev => ({
            ...prev,
            history: [...prev.history, { ...newHistory, output }],
            commandHistory: [...prev.commandHistory, command],
            historyIndex: prev.commandHistory.length,
        }));
    }, [state.currentDirectory]);

    const clearTerminal = useCallback(() => {
        setState(prev => ({
            ...prev,
            history: [],
        }));
    }, []);

    const navigateHistory = useCallback((direction: 'up' | 'down') => {
        if (direction === 'up' && state.historyIndex > 0) {
            setState(prev => ({
                ...prev,
                historyIndex: prev.historyIndex - 1,
            }));
            return state.commandHistory[state.historyIndex - 1];
        }
        if (direction === 'down' && state.historyIndex < state.commandHistory.length - 1) {
            setState(prev => ({
                ...prev,
                historyIndex: prev.historyIndex + 1,
            }));
            return state.commandHistory[state.historyIndex + 1];
        }
        return '';
    }, [state.historyIndex, state.commandHistory]);

    return {
        history: state.history,
        currentDirectory: state.currentDirectory,
        processCommand,
        clearTerminal,
        navigateHistory,
    };
}; 