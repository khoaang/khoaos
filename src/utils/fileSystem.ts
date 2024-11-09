import { FileSystem } from '../types/terminal';

export const fileSystem: FileSystem = {
    home: {
        type: 'directory',
        content: {
            projects: {
                type: 'directory',
                content: {
                    'project1.md': {
                        type: 'file',
                        content: '# Project 1\n\nDetails about project 1...'
                    }
                }
            },
            'about.md': {
                type: 'file',
                content: '# About Me\n\nI am a software developer...'
            }
        }
    }
}; 