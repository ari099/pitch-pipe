import React from 'react';
import Tone from 'tone';
import './PlayButton.css';

/**
 * PlayButton React Component
 * @param props 
 */
const PlayButton = props => {
   // Tone Sound Synthesizer....
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
      // Use Tone JS to play a note
      synth.triggerAttackRelease(`${props.note}4`, "32n");
   }

   return <circle className="PlayButton-button" onClick={click} cx={props.x} cy={props.y} r={50} />;
};

export default PlayButton;