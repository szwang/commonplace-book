import React from 'react';
import Note from './Note';
import useSheet from 'react-jss';
import { connect } from 'react-redux';
import { addNote, deleteNote } from '../actions/notes';

const STYLES = {

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
    '&:hover': {
      background: '#FFBBBB'
    },
    border: 0,
    borderRadius: '0.5rem',
    cursor: 'pointer',
    margin: '2rem',
    textAlign: 'center',
    userSelect: 'none'
  }
};

const Notes = ({ sheet, notes, addNote, deleteNote }) =>
  <div className={sheet.classes.notes}>
    {!!notes.length &&
      <h1>Notes in this book:</h1>
    }
    {!!notes.length &&
      <div className={sheet.classes.basket}>
        {notes.map(note => (
          <Note key={`note-${note.id}`}
                  note={note}
                  onDeleteNote={deleteNote} />
        ))}
      </div>
    }
    {!notes.length &&
      <h1>This book has no notes in it :(</h1>
    }
    <a className={sheet.classes.button} onClick={addNote}>
      add a note into the book
    </a>
  </div>;

export default connect(
  state => ({ notes: state.notes }),
  { addNote, deleteNote }
)(
  useSheet(Notes, STYLES)
);
