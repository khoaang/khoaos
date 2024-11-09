import React, { forwardRef } from 'react';

interface TerminalInputProps {
    value: string;
    onChange: (value: string) => void;
    onSubmit: (command: string) => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
    currentDirectory: string;
    }

export const TerminalInput = forwardRef<HTMLInputElement, TerminalInputProps>(
    ({ value, onChange, onSubmit, onKeyDown, currentDirectory }, ref) => {
        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            onSubmit(value);
        };

        return (
            <form onSubmit={handleSubmit} className="terminal-input-line">
                <span className="prompt">{currentDirectory}$</span>
                <input
                    ref={ref}
                    type="text"
                    className="terminal-input"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onKeyDown={onKeyDown}
                    spellCheck="false"
                    autoComplete="off"
                />
            </form>
        );
    }
);