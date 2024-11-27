import React, { useEffect, useState } from 'react';

const CursorBall: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768); // Desktop view only

  useEffect(() => {
    // Update `isDesktop` when the window is resized
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return; 

    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDesktop]);

  useEffect(() => {
    if (!isDesktop) return; // Skip updating position if not desktop

    const timeout = setTimeout(() => {
      setPosition(cursorPosition);
    }, 8);

    return () => clearTimeout(timeout);
  }, [cursorPosition, isDesktop]);

  // Only render the cursor ball if `isDesktop` is true
  if (!isDesktop) return null;

  return (
    <div>
      <div
        style={{
          position: 'fixed',
          width: '15px',
          height: '15px',
          borderRadius: '50%',
          backgroundColor: 'rgba(0, 0, 0, 0.65)',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
          pointerEvents: 'none',
          left: position.x - 7.5,
          top: position.y - 7.5,
          transition: 'transform 0.2s ease-in-out',
          transform: `translate(-50%, -50%)`,
          zIndex: 900999,
        }}
      />
    </div>
  );
};

export default CursorBall;
