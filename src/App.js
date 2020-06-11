import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Disk from './Disk';
// import PlayButton from './PlayButton';
import Pointer from './Pointer';

/**
 * Main Application React Component
 */
function App() {
  const [note, setNote] = useState("C");
  return (
    <div className="Pitch-Pipe">
      <header className="Pitch-Pipe-header">
        <svg className="Pitch-Pipe-container">
          <Disk x={250} y={250} note={note} />
          <Pointer x={250} y={467.5} />
        </svg>
      </header>
    </div>
  );
}

export default App;
