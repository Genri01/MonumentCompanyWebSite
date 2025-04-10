import React from 'react';
import './style.css';

function ItemOrder(props) {
    const { title, back, mobile } = props;
    return (
      <div style={{backgroundImage: `url(${back})`}} className={`${mobile ? 'mobileWorkOrderItem' : 'workOrderItem'}`}> 
        <div className='workOrderItemBlack'></div> 
        <div className={`${mobile ? 'mobileWorkOrderItemTitle' : 'workOrderItemTitle'}`}>{title}</div> 
      </div>
    );
}

export default ItemOrder;
