import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [sounds, setSounds] = useState<Sound[]>([])

  const fetchSounds = () => {}

  useEffect(() => {
    fetchSounds()
  }, [])

  return (
    <main className="App">
      {sounds.map(({ title }) => {
        <button>
          {title}
        </button>
      })}
    </main>
  );
}

export default App;
