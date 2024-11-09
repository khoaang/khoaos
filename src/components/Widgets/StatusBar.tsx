import { useState, useEffect } from 'react';
import './Widgets.css';

export const StatusBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="status-bar">
      <div>KhoaOS</div>
      <div>{time.toLocaleTimeString()}</div>
    </div>
  );
}; 