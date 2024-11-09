import { fileSystem } from '../../types/filesystem';
import './Desktop.css';
import { useState } from 'react';
import { Window } from '../Common/Window';
import { KhoaGPT } from '../Apps/KhoaGPT';

export const Desktop = () => {
  const [showResume, setShowResume] = useState(false);
  const [showKhoaGPT, setShowKhoaGPT] = useState(false);

  const handleFileClick = (url?: string, name?: string, type?: string) => {
    if (name === 'resume.pdf') {
      setShowResume(true);
    } else if (name === 'KhoaGPT.app') {
      setShowKhoaGPT(true);
    } else if (url) {
      if (url.startsWith('mailto:')) {
        window.location.href = url;
      } else {
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    }
  };

  return (
    <div className="desktop-icons">
      {Object.values(fileSystem).map((file) => (
        <div 
          key={file.name}
          className="desktop-icon"
          onClick={() => handleFileClick(file.url, file.name, file.type)}
          title={file.name}
        >
          <div className="icon">
            {file.icon || (
              file.type === 'file' && file.name.endsWith('.pdf') ? '📄' :
              file.type === 'file' && file.name.endsWith('.url') ? '🔗' :
              file.type === 'directory' ? '📁' : '📄'
            )}
          </div>
          <div className="filename">{file.name}</div>
        </div>
      ))}
      {showResume && (
        <Window 
          title="Resume.pdf" 
          onClose={() => setShowResume(false)}
          initialPosition={{ x: window.innerWidth/2 - 400, y: window.innerHeight/2 - 300 }}
        >
          <div className="window-content resume-window">
            <iframe 
              src="/resume.pdf" 
              className="pdf-viewer"
              title="Resume PDF"
            />
          </div>
        </Window>
      )}
      {showKhoaGPT && (
        <Window 
          title="KhoaGPT" 
          onClose={() => setShowKhoaGPT(false)}
          initialPosition={{ x: window.innerWidth/2 - 150, y: window.innerHeight/2 - 190 }}
          className="khoagpt-window"
        >
          <KhoaGPT onClose={() => setShowKhoaGPT(false)} />
        </Window>
      )}
    </div>
  );
}; 