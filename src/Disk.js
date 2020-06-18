import React, { useState } from 'react';
import PlayButton from './PlayButton';
import './Disk.css';

/**
 * Disk React Componennt
 *  = what the user moves around to switch pitches
 */
const Disk = props => {
   const [rotateDegrees, setRotateDegrees] = useState(0); // Current rotate position....
   const [posX, setPosX] = useState(0);
   const [posY, setPosY] = useState(0);
   const [down, setDown] = useState(false); // Whether or not the mouse is down....
   const notes = { // Pitches to use for the Tone synthesizer to play a note....
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
   const center = { // Center of the SVG element....
      x: 250,
      y: 250
   };
   const radius = 130; // Size of the disk circle....
   const styles = { // Defining the CSS rotation transform and the point the disk rotates around....
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
         // Getting the SVG container element
         let svg = document.getElementsByClassName("Pitch-Pipe-container")[0];
         
         // Creating an SVGPoint for future math
         let pt = svg.createSVGPoint();

         // Get the point in global SVG space
         pt.x = e.clientX;
         pt.y = e.clientY;
         let result = pt.matrixTransform(svg.getScreenCTM().inverse());
         
         // Setting the positions
         setPosX(Math.round(result.x));
         setPosY(Math.round(result.y));
         // console.log(`${posX} ${posY}`);
         setRotateDegrees(Math.round(Math.atan2(posY - center.y, posX - center.x) * (180 / Math.PI) + 180));
      }
   }

   /**
    * Calculates coordinates based on radius, degrees, and center coordinates....
    * @param degrees 
    * @returns coordinate_object
    */
   const coordinate = degrees => {
      return {
         x: radius * Math.sin(degrees * Math.PI / 180) + center.x,
         y: radius * Math.cos(degrees * Math.PI / 180) + center.y
      };
   };

   /**
    * Calculates degrees based on current value and the limit....
    * @param value 
    * @param limit 
    */
   // const degrees = (value, limit) => {
   //    let quotient = 360 / limit;
   //    return Math.round(quotient * value);
   // }

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
            
         {/* How the user plays a note */}
         <PlayButton x={250} y={250} note={props.note} />
      </>
   );
};

export default Disk;