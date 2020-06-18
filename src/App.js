import React, { useState } from 'react';
import './App.css';
import Disk from './Disk';
// import PlayButton from './PlayButton';
import Pointer from './Pointer';

/**
 * Main Application React Component
 */
const App = () => {
  const [note, setNote] = useState("C");
  return (
    <div className="Pitch-Pipe">
      <header className="Pitch-Pipe-header">
        <svg className="Pitch-Pipe-container">
          <Disk x={250} y={250} note={note} setNote={setNote} />
          <Pointer x={250} y={467.5} note={note} />
        </svg>
      </header>
    </div>
  );
}

export default App;
