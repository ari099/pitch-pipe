import React, { useState } from 'react';
import './Disk.css';

const Disk = props => {
   const [rotateDegrees, setRotateDegrees] = useState(0);

   const handleMouseDown = e => {
      // complete this handler...
   }

   const handleMouseUp = e => {
      // complete this handler...
   }

   const coordinate = degrees => {
      return {
      x: 130 * Math.sin(degrees * Math.PI / 180) + 250,
      y: 130 * Math.cos(degrees * Math.PI / 180) + 250
      };
   };

   return (
      <>
         <circle className="Disk-circle"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            cx={props.x} cy={props.y} r={200} />
         <text className="Disk-note-text" textAnchor="middle" alignmentBaseline="middle" style={{transformOrigin: "250px 250px" , transform : `rotate(${rotateDegrees}deg)`}}
            x={coordinate(0).x} y={coordinate(0).y}>C</text>
         <text className="Disk-note-text" textAnchor="middle" alignmentBaseline="middle" style={{transformOrigin: "250px 250px" , transform : `rotate(${rotateDegrees}deg)`}}
            x={coordinate(30).x} y={coordinate(30).y}>*</text>
         <text className="Disk-note-text" textAnchor="middle" alignmentBaseline="middle" style={{transformOrigin: "250px 250px" , transform : `rotate(${rotateDegrees}deg)`}}
            x={coordinate(60).x} y={coordinate(60).y}>D</text>
         <text className="Disk-note-text" textAnchor="middle" alignmentBaseline="middle" style={{transformOrigin: "250px 250px" , transform : `rotate(${rotateDegrees}deg)`}}
            x={coordinate(90).x} y={coordinate(90).y}>*</text>
         <text className="Disk-note-text" textAnchor="middle" alignmentBaseline="middle" style={{transformOrigin: "250px 250px" , transform : `rotate(${rotateDegrees}deg)`}}
            x={coordinate(120).x} y={coordinate(120).y}>E</text>
         <text className="Disk-note-text" textAnchor="middle" alignmentBaseline="middle" style={{transformOrigin: "250px 250px" , transform : `rotate(${rotateDegrees}deg)`}}
            x={coordinate(150).x} y={coordinate(150).y}>F</text>
         <text className="Disk-note-text" textAnchor="middle" alignmentBaseline="middle" style={{transformOrigin: "250px 250px" , transform : `rotate(${rotateDegrees}deg)`}}
            x={coordinate(180).x} y={coordinate(180).y}>*</text>
         <text className="Disk-note-text" textAnchor="middle" alignmentBaseline="middle" style={{transformOrigin: "250px 250px" , transform : `rotate(${rotateDegrees}deg)`}}
            x={coordinate(210).x} y={coordinate(210).y}>G</text>
         <text className="Disk-note-text" textAnchor="middle" alignmentBaseline="middle" style={{transformOrigin: "250px 250px" , transform : `rotate(${rotateDegrees}deg)`}}
            x={coordinate(240).x} y={coordinate(240).y}>*</text>
         <text className="Disk-note-text" textAnchor="middle" alignmentBaseline="middle" style={{transformOrigin: "250px 250px" , transform : `rotate(${rotateDegrees}deg)`}}
            x={coordinate(270).x} y={coordinate(270).y}>A</text>
         <text className="Disk-note-text" textAnchor="middle" alignmentBaseline="middle" style={{transformOrigin: "250px 250px" , transform : `rotate(${rotateDegrees}deg)`}}
            x={coordinate(300).x} y={coordinate(300).y}>*</text>
         <text className="Disk-note-text" textAnchor="middle" alignmentBaseline="middle" style={{transformOrigin: "250px 250px" , transform : `rotate(${rotateDegrees}deg)`}}
            x={coordinate(330).x} y={coordinate(330).y}>B</text>
      </>
   );
};

export default Disk;