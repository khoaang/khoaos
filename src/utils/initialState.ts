import { TerminalState } from '../types/terminal';

export const initialState: TerminalState = {
    history: [],
    currentDirectory: '~',
    commandHistory: [],
    historyIndex: 0,
}; 