import React from 'react';
import './Pointer.css';

const Pointer = props => {
   return (
      <polygon className="Pointer-triangle"
         points={`${props.x},${props.y} ${props.x + 12.5},${props.y + 12.5} ${props.x - 12.5},${props.y + 12.5}`} />
   );
};

export default Pointer;