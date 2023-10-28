import React, { useState } from 'react';
import { db } from './firebase';

// function that adds data to the database
const addJournalEntry = (title, entry) => {
  db.collection('entries').add({
    title: title,
    text: entry,
    timestamp: new Date(),
  });
}

// State change for the text entry
function JournalEntryForm() {  
    const [title, setTitle] = useState('');
    const [entry, setEntry] = useState('');

    // Change title in database to written title
    const handleTitleChange = (event) => {
    setTitle(event.target.value);
    };

    // Change entry text in database to written text
    const handleEntryChange = (event) => {
    setEntry(event.target.value);
    };

    // Send to database when button is clicked
    const handleSubmit = (event) => {
    event.preventDefault();

    // Call addJournalEntry to save the entry to Firestore
    addJournalEntry(title, entry);

    // Clear the input field after submission
    setTitle('');
    setEntry('');
  };
  
  // HTML
  return (
    <div>
      <h2>Journal Entry Form</h2>
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
        />
        <div>
            <textarea
                placeholder="Write your journal entry here..."
                value={entry}
                onChange={handleEntryChange}
            /> 
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default JournalEntryForm;