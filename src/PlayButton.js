import React from 'react';
import './PlayButton.css';

const PlayButton = props => {
   const click = e => {
      // complete this handler....
   }

   return <circle className="PlayButton-button" onClick={click} cx={props.x} cy={props.y} r={50} />;
};

export default PlayButton;