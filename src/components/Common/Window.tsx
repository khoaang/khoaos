import { useState, useRef } from 'react';
import { Draggable } from './Draggable';
import { useZIndex } from '../../contexts/ZIndexContext';
import './Window.css';

interface WindowProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  initialPosition?: { x: number; y: number };
  className?: string;
}

export const Window = ({ title, onClose, children, initialPosition, className }: WindowProps) => {
  const { getNextZIndex, getWindowBaseZIndex, bringToFront } = useZIndex();
  const [zIndex, setZIndex] = useState(getWindowBaseZIndex() + getNextZIndex());
  const [size, setSize] = useState({ width: className?.includes('khoagpt') ? 280 : 800, height: className?.includes('khoagpt') ? 340 : 600 });
  const isResizing = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });
  const startSize = useRef({ width: 0, height: 0 });

  const handleWindowClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZIndex(bringToFront(zIndex));
  };

  const handleDragStart = () => {
    setZIndex(bringToFront(zIndex));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isResizing.current = true;
    startPos.current = { x: e.clientX, y: e.clientY };
    startSize.current = { width: size.width, height: size.height };
    e.stopPropagation();

    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing.current) return;

      const deltaX = e.clientX - startPos.current.x;
      const deltaY = e.clientY - startPos.current.y;

      const newWidth = Math.max(400, startSize.current.width + deltaX);
      const newHeight = Math.max(300, startSize.current.height + deltaY);

      setSize({
        width: newWidth,
        height: newHeight
      });
    };

    const handleMouseUp = () => {
      isResizing.current = false;
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <Draggable 
      initialPosition={initialPosition} 
      zIndex={zIndex}
      onDragStart={handleDragStart}
    >
      <div 
        className="window" 
        onClick={handleWindowClick}
        style={{ 
          width: size.width, 
          height: size.height
        }}
      >
        <div className="window-titlebar">
          <div className="window-title">{title}</div>
          <button className="window-close" onClick={onClose}>×</button>
        </div>
        {children}
        <div className="resize-handle" onMouseDown={handleMouseDown} />
      </div>
    </Draggable>
  );
}; 