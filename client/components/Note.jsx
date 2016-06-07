import React, { PropTypes } from 'react';
import NoteIcon from '../svg/note.svg';

const Note = ({ onDeleteNote, note }) => (
  <div>
    <div>
      <div><NoteIcon /></div>
      <div>Note #{note.id}</div>
      <div>{note.content}</div>
    </div>
    <a onClick={onDeleteNote.bind(this, note.id)}>
      Remove note
    </a>
  </div>
);

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired
};

export default Note;
