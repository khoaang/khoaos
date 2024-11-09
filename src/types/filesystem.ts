export interface File {
  name: string;
  type: 'file' | 'directory' | 'app';
  content?: string;
  url?: string;
  icon?: string;
}

export interface Directory {
  [key: string]: File;
}

export const fileSystem = {
  resume: {
    name: 'resume.pdf',
    type: 'file',
    url: '/resume.pdf'
  },
  github: {
    name: 'github.url',
    type: 'file',
    url: 'https://github.com/kh0a'
  },
  linkedin: {
    name: 'linkedin.url',
    type: 'file',
    url: 'https://linkedin.com/in/kh0a'
  },
  mail: {
    name: 'mail.url',
    type: 'file',
    url: 'mailto:khoan@berkeley.edu',
    icon: '📧'
  },
  khoagpt: {
    name: 'KhoaGPT.app',
    type: 'app',
    icon: '🤖'
  }
} as const; 