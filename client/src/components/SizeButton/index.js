import React from 'react';
import './style.css';
import images from '../../assets/images'

function SizeButton(props) {
    const { id, text, active, width, height, color, onClick, margin, disabled} = props;
    const {iconp,icont} = images;
 
    return (
      <div 
        style={{ 
          pointerEvents: disabled ? 'none' : 'all', 
          width: width === undefined ? '100px': width,
          height: height === undefined ? 'auto' : height,
          margin: margin === undefined ? '0px' : margin, 
          border: `2px solid ${active ? 'rgb(47 176 234)' : 'rgb(173 227 251)' }`,  
        }} 

        className="wrapperSizeButton"
        onClick={onClick === undefined ? () => {} : () => onClick(id)}
      >
        <div style={{color: `${ active ? 'rgb(62, 62, 62)' : 'rgb(178, 176, 176)' }`}} className="textSizeButtonContainer"> 
          <div style={{display:'flex',flexDirection:'row', justifyContent:'start',alignItems:'center'}}>
            <img width={25} src={iconp} />
            <div style={{ margin:'0px 5px'}}>{text.size}</div>
          </div> 
          <div style={{display:'flex',flexDirection:'row', justifyContent:'start',alignItems:'center'}}>
            <img width={25}  src={icont} />
            <div style={{ margin:'0px 5px'}}>{text.tumb}</div>
          </div> 
        </div>
      </div>
    );
}

export default SizeButton;
