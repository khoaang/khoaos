import React, { createContext, useContext, useRef } from 'react';

interface ZIndexContextType {
  getNextZIndex: () => number;
  getCurrentZIndex: () => number;
  getWindowBaseZIndex: () => number;
  bringToFront: (currentZ: number) => number;
}

const ZIndexContext = createContext<ZIndexContextType | null>(null);

export const ZIndexProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const currentZIndexRef = useRef(500);
  const windowBaseZIndex = 1000;

  const getNextZIndex = () => {
    currentZIndexRef.current += 1;
    return currentZIndexRef.current;
  };

  const getCurrentZIndex = () => currentZIndexRef.current;

  const getWindowBaseZIndex = () => windowBaseZIndex;

  const bringToFront = (currentZ: number) => {
    currentZIndexRef.current = Math.max(currentZIndexRef.current + 1, currentZ + 1);
    return currentZIndexRef.current;
  };

  return (
    <ZIndexContext.Provider value={{ 
      getNextZIndex, 
      getCurrentZIndex, 
      getWindowBaseZIndex,
      bringToFront 
    }}>
      {children}
    </ZIndexContext.Provider>
  );
};

export const useZIndex = () => {
  const context = useContext(ZIndexContext);
  if (!context) {
    throw new Error('useZIndex must be used within a ZIndexProvider');
  }
  return context;
}; 