import { TerminalHistory } from '../../types/terminal';
import { ansiToHtml } from '../../utils/ansiToHtml';

interface TerminalOutputProps {
    history: TerminalHistory[];
}

export const TerminalOutput: React.FC<TerminalOutputProps> = ({ history }) => {
    return (
        <div className="terminal-output">
            {history.map((entry, index) => (
                <div key={index}>
                    {entry.command && (
                        <div className="terminal-output-line">
                            <span className="terminal-output-command">
                                $ {entry.command}
                            </span>
                        </div>
                    )}
                    {entry.output && (
                        <pre className="terminal-output-line">
                            {ansiToHtml(entry.output)}
                        </pre>
                    )}
                </div>
            ))}
        </div>
    );
}; 