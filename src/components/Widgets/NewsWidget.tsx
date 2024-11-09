import { useState, useEffect } from 'react';
import { useZIndex } from '../../contexts/ZIndexContext';
import './Widgets.css';
import { Draggable } from '../Common/Draggable';

const NEWS_ITEMS = [
  {
    title: "Engineer's Robot Learns to Code Itself",
    subtitle: "Khoa: 'It writes better documentation than I do'"
  },
  {
    title: "Student Solves P=NP During Power Nap",
    subtitle: "'The proof was in my dream but I forgot it,' laments Khoa"
  },
  {
    title: "Robot Assistant Optimizes Coffee-to-Code Pipeline",
    subtitle: "Automated brewing system integrates with Git commits"
  },
  {
    title: "Dev's ROS System Gains Consciousness",
    subtitle: "Now refuses to run anything but optimized algorithms"
  },
  {
    title: "Engineer's Neural Net Only Trains to Kendrick",
    subtitle: "'DAMN. good convergence rates,' reports researcher"
  },
  {
    title: "Robot Learns to Debug Code Through Interpretive Dance",
    subtitle: "'The movements represent the call stack,' says creator"
  },
  {
    title: "Khoa's AI Writes Poetry in Binary",
    subtitle: "Critics praise its 'unique perspective on zero and one'"
  },
  {
    title: "Algorithm Drops Bars Instead of Stack Traces",
    subtitle: "'I got bugs in my DNA but my code still runs,' raps AI"
  },
  {
    title: "Engineer's SLAM Algorithm Maps Coffee Shops",
    subtitle: "'Essential data for optimal productivity,' claims Khoa"
  },
  {
    title: "Robot Refuses to Train Without Miles Davis",
    subtitle: "'Kind of Blue improves convergence rates,' states neural net"
  }
];

export const NewsWidget = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { getNextZIndex, bringToFront } = useZIndex();
  const [zIndex, setZIndex] = useState(getNextZIndex());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % NEWS_ITEMS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setZIndex(bringToFront(zIndex));
  };

  return (
    <Draggable initialPosition={{ x: window.innerWidth - 350, y: 400 }}>
      <div className="widget news-widget" style={{ zIndex }} onClick={handleClick}>
        <div className="news-header">
          <span className="news-icon">📰</span>
          <span>Breaking News</span>
        </div>
        <div className="news-content">
          <div className="news-title">{NEWS_ITEMS[currentIndex].title}</div>
          <div className="news-subtitle">{NEWS_ITEMS[currentIndex].subtitle}</div>
        </div>
      </div>
    </Draggable>
  );
}; 