// index.js
import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import images from '../../assets/images';

const { messages } = images;

const FloatingContactButtons = ({ icons }) => {
  const [isOpen, setIsOpen] = useState(false); 
  const timeoutRef = useRef(null);
  const containerRef = useRef(null);

  const clearAutoClose = () => clearTimeout(timeoutRef.current);

  const startAutoClose = () => {
    clearAutoClose();
    timeoutRef.current = setTimeout(() => setIsOpen(false), 3000);
  };

  const toggleButtons = () => {
    const newState = !isOpen;
    setIsOpen(newState); 
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('mouseenter', clearAutoClose);
    container.addEventListener('mouseleave', startAutoClose);

    return () => {
      container.removeEventListener('mouseenter', clearAutoClose);
      container.removeEventListener('mouseleave', startAutoClose);
      clearAutoClose();
    };
  }, []);

  return (
    <div className="floating-container" ref={containerRef}> 
      <button className="main-button shadow" onClick={toggleButtons}>
        <img src={messages} alt='messages' className="plus-icon"/> 
      </button>
      {icons.map((icon, index) => (
        <a
          key={index}
          href={icon.href}
          target="_blank"
          rel="noopener noreferrer"
          title={icon.alt}
          className={`social-button shadow ${isOpen ? 'show' : ''}`}
          style={{ bottom: `${70 * (index + 1)}px` }}
        >
          <img src={icon.src} alt={icon.alt} className="icon-img" />
          <span className="tooltip">{icon.alt}</span>
        </a>
      ))}
    </div>
  );
};

export default FloatingContactButtons;

 