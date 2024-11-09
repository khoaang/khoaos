import { COMMANDS, COMMAND_OUTPUTS } from '../types/terminal';

export const executeCommand = (command: string, currentDirectory: string): string => {
    const [cmd] = command.trim().toLowerCase().split(' ');

    switch (cmd) {
        case COMMANDS.HELP:
            return COMMAND_OUTPUTS[COMMANDS.HELP];
        case COMMANDS.ABOUT:
            return COMMAND_OUTPUTS[COMMANDS.ABOUT];
        case COMMANDS.EDUCATION:
            return COMMAND_OUTPUTS[COMMANDS.EDUCATION];
        case COMMANDS.EXPERIENCE:
            return COMMAND_OUTPUTS[COMMANDS.EXPERIENCE];
        case COMMANDS.PROJECTS:
            return COMMAND_OUTPUTS[COMMANDS.PROJECTS];
        case COMMANDS.SKILLS:
            return COMMAND_OUTPUTS[COMMANDS.SKILLS];
        case COMMANDS.CONTACT:
            return COMMAND_OUTPUTS[COMMANDS.CONTACT];
        case COMMANDS.CLEAR:
            return '__CLEAR__';
        default:
            return `Command not found: ${cmd}. Type 'help' for available commands.`;
    }
}; 