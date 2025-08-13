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
                content: '# About Me\n\nUC Berkeley EECS student specializing in the intersection of AI, embedded systems, and full-stack development.\\n\\nI architect and deploy scalable, cloud-native AI applications and love leveraging software to solve complex hardware challenges.'
            }
        }
    }
}; 