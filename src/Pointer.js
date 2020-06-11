import React from 'react';
import Tone from 'tone';
import './Pointer.css';

/**
 * Pointer React Component
 * @param props 
 */
const Pointer = props => {
   const synth = new Tone.Synth();
   synth.envelope.attack = 0.01;
   synth.envelope.attackCurve = "linear";
   synth.envelope.decay = 1.20;
   synth.envelope.decayCurve = "exponential";
   synth.envelope.release = 1.87;
   synth.envelope.releaseCurve = "exponential";
   // synth.oscillator.type = "sine";
   synth.oscillator.partialCount = 7;
   synth.toMaster();

   const click = e => {
      // complete this handler....
      // PLAN: Use Tone JS to play a note
      synth.triggerAttackRelease("C4", "32n");
   }

   return (
      <polygon className="Pointer-triangle" onClick={click}
         points={`${props.x},${props.y} ${props.x + 12.5},${props.y + 12.5} ${props.x - 12.5},${props.y + 12.5}`} />
   );
};

export default Pointer;