import React from 'react';

export const ansiToHtml = (text: string): JSX.Element[] => {
  const parts = text.split(/(\x1b\[\d+m|\x1b\[0m)/);
  const elements: JSX.Element[] = [];
  let currentColor = '';
  let key = 0;

  parts.forEach(part => {
    if (part.startsWith('\x1b[')) {
      switch (part) {
        case '\x1b[96m': currentColor = 'terminal-cyan'; break;
        case '\x1b[93m': currentColor = 'terminal-yellow'; break;
        case '\x1b[90m': currentColor = 'terminal-gray'; break;
        case '\x1b[0m': currentColor = ''; break;
      }
    } else if (part) {
      elements.push(
        React.createElement('span', {
          key: key,
          className: currentColor || undefined
        }, part)
      );
      key++;
    }
  });

  return elements;
}; 