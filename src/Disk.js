import React, { useState } from 'react';
import './Disk.css';

const Disk = props => {
   const [rotateDegrees, setRotateDegrees] = useState(0);
   const [posX, setPosX] = useState(0);
   const [posY, setPosY] = useState(0);
   const [down, setDown] = useState(false);
   const center = {
      x: 250,
      y: 250
   };
   const radius = 125;
   const styles = {
      transformOrigin: `${center.x}px ${center.y}px`,
      transform : `rotate(${rotateDegrees}deg)`
   };

   const handleMouseUp = e => {
      setDown(false);
      setRotateDegrees(nearestMultiple(rotateDegrees, 3));
      // console.log(rotateDegrees);
   }

   const handleMouseMove = e => {
      if(down) {
         setPosX(e.clientX);
         setPosY(e.clientY);
         setRotateDegrees(Math.round(Math.atan2(posY - center.y, posX - center.x) * 180 / Math.PI + 90));
      }
   }

   const coordinate = degrees => {
      return {
         x: radius * Math.sin(degrees * Math.PI / 180) + center.x,
         y: radius * Math.cos(degrees * Math.PI / 180) + center.y
      };
   };

   const degrees = (value, limit) => {
      let quotient = 360 / limit;
      return Math.round(quotient * value);
   }

   const nearestMultiple = (x, n) => {
      if(x > n) return x;
      n = n + Math.round(x / 2);
      n = n - (n % x);
      return n
   }

   return (
      <>
         <circle className="Disk-circle"
            onMouseDown={() => setDown(true)}
            onMouseUp={(handleMouseUp)}
            onMouseMove={handleMouseMove}
            cx={props.x} cy={props.y} r={200} />
         <text className="Disk-note-text" textAnchor="middle" alignmentBaseline="middle" 
            style={styles} x={coordinate(0).x} y={coordinate(0).y}>C</text>
         <text className="Disk-note-text" textAnchor="middle" alignmentBaseline="middle" 
            style={styles} x={coordinate(30).x} y={coordinate(30).y}>*</text>
         <text className="Disk-note-text" textAnchor="middle" alignmentBaseline="middle" 
            style={styles} x={coordinate(60).x} y={coordinate(60).y}>D</text>
         <text className="Disk-note-text" textAnchor="middle" alignmentBaseline="middle" 
            style={styles} x={coordinate(90).x} y={coordinate(90).y}>*</text>
         <text className="Disk-note-text" textAnchor="middle" alignmentBaseline="middle" 
            style={styles} x={coordinate(120).x} y={coordinate(120).y}>E</text>
         <text className="Disk-note-text" textAnchor="middle" alignmentBaseline="middle" 
            style={styles} x={coordinate(150).x} y={coordinate(150).y}>F</text>
         <text className="Disk-note-text" textAnchor="middle" alignmentBaseline="middle" 
            style={styles} x={coordinate(180).x} y={coordinate(180).y}>*</text>
         <text className="Disk-note-text" textAnchor="middle" alignmentBaseline="middle" 
            style={styles} x={coordinate(210).x} y={coordinate(210).y}>G</text>
         <text className="Disk-note-text" textAnchor="middle" alignmentBaseline="middle" 
            style={styles} x={coordinate(240).x} y={coordinate(240).y}>*</text>
         <text className="Disk-note-text" textAnchor="middle" alignmentBaseline="middle" 
            style={styles} x={coordinate(270).x} y={coordinate(270).y}>A</text>
         <text className="Disk-note-text" textAnchor="middle" alignmentBaseline="middle" 
            style={styles} x={coordinate(300).x} y={coordinate(300).y}>*</text>
         <text className="Disk-note-text" textAnchor="middle" alignmentBaseline="middle" 
            style={styles} x={coordinate(330).x} y={coordinate(330).y}>B</text>
      </>
   );
};

export default Disk;