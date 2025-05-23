import React from 'react';
import './style.css';

function FilterButton(props) {
  const { id, text, width, height, color, onClick, margin, disabled } = props;
  return (
    <div 
      style={{ 
        pointerEvents: disabled ? 'none' : 'all', 
        width: width === undefined ? '150px': width,
        height: height === undefined ? '40px' : height,
        margin: margin === undefined ? '0px' : margin, 
        background: disabled ? '#c7c7c7' : `linear-gradient(0deg, ${color === undefined ? 'rgb(47 176 234)': color} 0%, ${color === undefined ? 'rgb(47 197 234)': color} 100%)`  
      }} 

      className="wrapperFilterButton"
      onClick={onClick === undefined ? () => {} : () => onClick(id)}
    >
      <div className="textFilterButton">{ text }</div>
    </div>
  );
}

export default FilterButton;
