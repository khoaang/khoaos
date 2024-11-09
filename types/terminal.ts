export interface FileSystem {
  [key: string]: Directory | File;
}

export interface Directory {
  type: 'directory';
  content: {
    [key: string]: Directory | File;
  };
}

export interface File {
  type: 'file';
  content: string;
}

export interface TerminalHistory {
  command: string;
  output: string;
}

export interface CommandResult {
  output: string;
  error?: boolean;
}

export interface TerminalState {
  history: TerminalHistory[];
  currentDirectory: string;
  commandHistory: string[];
  historyIndex: number;
}

export type CommandFunction = (args: string[]) => CommandResult;

export interface Commands {
  [key: string]: CommandFunction;
} 