import React, { useState } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import './App.css';

const App = () => {
    const [selectedNote, setSelectedNote] = useState(null);

    const handleSave = (newNote) => {
        setSelectedNote(null);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Note Taking App</h1>
                <NoteForm note={selectedNote} onSave={handleSave} />
                <NoteList />
            </header>
        </div>
    );
};

export default App;



/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
*/