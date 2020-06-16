import React, { useState } from 'react';
import PlayButton from './PlayButton';
import './Disk.css';

/**
 * Disk React Componennt
 */
const Disk = props => {
   const [rotateDegrees, setRotateDegrees] = useState(0);
   const [posX, setPosX] = useState(0);
   const [posY, setPosY] = useState(0);
   const [down, setDown] = useState(false);
   const notes = {
      0: "C",
      30: "C#",
      60: "D",
      90: "D#",
      120: "E",
      150: "F",
      180: "F#",
      210: "G",
      240: "G#",
      270: "A",
      300: "A#",
      330: "B",
      360: "C"
   };
   const center = {
      x: 250,
      y: 250
   };
   const radius = 130;
   const styles = {
      transformOrigin: `${center.x}px ${center.y}px`,
      transform : `rotate(${rotateDegrees}deg)`
   };

   const handleMouseUp = e => {
      setDown(false);
      setRotateDegrees(Math.ceil(rotateDegrees / 30) * 30);
      props.setNote(notes[Math.ceil(rotateDegrees / 30) * 30]);
   }

   const handleMouseMove = e => {
      if(down) {
         setPosX(Math.round(e.clientX - 500));
         setPosY(Math.round(e.clientY));
         setRotateDegrees(Math.round(Math.atan2(posY - center.y, posX - center.x) * (180 / Math.PI) + 180));
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
         <PlayButton x={250} y={250} note={props.note} />
         {/* <text className="Disk-rotate-degrees" textAnchor="middle" alignmentBaseline="middle"
            x={center.x} y={center.y}>{rotateDegrees}</text> */}
      </>
   );
};

export default Disk;