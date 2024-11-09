import './Widgets.css';
import { useState } from 'react';
import { useZIndex } from '../../contexts/ZIndexContext';
import { Draggable } from '../Common/Draggable';

export const Weather = () => {
  const { getNextZIndex, bringToFront } = useZIndex();
  const [zIndex, setZIndex] = useState(getNextZIndex());

  const handleClick = () => {
    setZIndex(bringToFront(zIndex));
  };

  return (
    <Draggable initialPosition={{ x: window.innerWidth - 300, y: 100 }}>
      <div className="widget weather-widget" style={{ zIndex }} onClick={handleClick}>
        <div className="weather-icon">🌤️</div>
        <div className="weather-temp">72°F</div>
        <div className="weather-desc">Partly Cloudy</div>
        <div className="weather-location">Silicon Valley, CA</div>
      </div>
    </Draggable>
  );
}; 