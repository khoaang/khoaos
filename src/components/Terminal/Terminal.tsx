import { useState, useRef, useEffect } from 'react';
import { TerminalInput } from './TerminalInput';
import { TerminalOutput } from './TerminalOutput';
import { useTerminal } from '../../hooks/useTerminal';
import { BootSequence } from './BootSequence';
import { useZIndex } from '../../contexts/ZIndexContext';
import { Draggable } from '../Common/Draggable';
import './styles.css';

export const Terminal: React.FC = () => {
    const {
        history,
        currentDirectory,
        processCommand,
        clearTerminal,
        navigateHistory,
    } = useTerminal();
    
    const [input, setInput] = useState('');
    const [booting, setBooting] = useState(true);
    const terminalRef = useRef<HTMLDivElement>(null);
    const initialRenderRef = useRef(true);
    const [bootText, setBootText] = useState<string[]>([]);

    const bootTextRef = useRef<string[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    const { getNextZIndex, bringToFront } = useZIndex();
    const [zIndex, setZIndex] = useState(getNextZIndex());

    const handleSubmit = (command: string) => {
        processCommand(command);
        setInput('');
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            e.preventDefault();
            const command = navigateHistory(e.key === 'ArrowUp' ? 'up' : 'down');
            setInput(command);
        }
    };

    const handleBootText = (text: string[]) => {
        bootTextRef.current = text;
        setBootText(text);
    };

    const focusInput = () => {
        if (inputRef.current && !booting) {
            inputRef.current.focus();
        }
    };

    useEffect(() => {
        if (!booting && initialRenderRef.current) {
            processCommand('about');
            initialRenderRef.current = false;
        }
    }, [booting, processCommand]);

    useEffect(() => {
        const scrollToBottom = () => {
            if (terminalRef.current) {
                const terminal = terminalRef.current;
                terminal.scrollTop = terminal.scrollHeight;
            }
        };

        scrollToBottom();
        
        const observer = new MutationObserver(scrollToBottom);
        
        if (terminalRef.current) {
            observer.observe(terminalRef.current, {
                childList: true,
                subtree: true
            });
        }

        return () => observer.disconnect();
    }, [history]);

    useEffect(() => {
        if (!booting) {
            focusInput();
        }
    }, [booting]);

    const handleClick = () => {
        setZIndex(bringToFront(zIndex));
        focusInput();
    };

    return (
        <Draggable initialPosition={{ x: window.innerWidth / 2 - 600, y: window.innerHeight / 2 - 300 }}>
            <div className="terminal-window" onClick={handleClick} style={{ zIndex }}>
                <div className="terminal-titlebar">
                    <div className="window-controls">
                        <button className="window-button close" />
                        <button className="window-button minimize" />
                        <button className="window-button maximize" />
                    </div>
                    <div>KhoaOS Terminal v1.0.0</div>
                </div>
                <div className="terminal" ref={terminalRef}>
                    <div className="terminal-content">
                        {booting ? (
                            <BootSequence 
                                onComplete={() => setBooting(false)} 
                                onBootText={handleBootText}
                            />
                        ) : (
                            <>
                                {bootTextRef.current.map((text, index) => (
                                    <pre key={index} className="boot-text">{text}</pre>
                                ))}
                                <TerminalOutput history={history} />
                                <TerminalInput
                                    ref={inputRef}
                                    value={input}
                                    onChange={setInput}
                                    onSubmit={handleSubmit}
                                    onKeyDown={handleKeyDown}
                                    currentDirectory={currentDirectory}
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Draggable>
    );
}; 