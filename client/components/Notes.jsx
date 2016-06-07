import React from 'react';
import Note from './Note';

const styles = {
  link: {
    textDecoration: 'none'
  },

  basket: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'stretch',
    flexWrap: 'wrap'
  },

  notes: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '60%'
  },

  button: {
    padding: '1rem 1.5rem',
    background: '#FFAAAA',
    border: 0,
    borderRadius: '0.5rem',
    cursor: 'pointer',
    margin: '2rem',
    textAlign: 'center',
    userSelect: 'none'
  }
};

const Notes = ({ notes, addNote, deleteNote }) =>
  <div>
    <h1>Suzanne's Commonplace Book</h1>
    {!!notes.length &&
      <div style={styles.basket}>
        {notes.map(note => (
          <Note 
                key={`note-${note.id}`}
                note={note}
                onDeleteNote={deleteNote} />
        ))}
      </div>
    }
    {!notes.length &&
      <h1>This book has no notes in it :(</h1>
    }
    <a style={styles.button} onClick={addNote}>
      Add a note into the book
    </a>
  </div>;

export default Notes
