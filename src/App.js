// App.js
import React from 'react';
import './App.css';
import JournalEntryForm from './entryForm';
import JournalEntries from './journalEntries';


function App() {
  return (
    <div className="App">
      <JournalEntryForm />
      <JournalEntries />
    </div>
  );
}

export default App;
