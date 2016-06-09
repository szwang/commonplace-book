import React, { PropTypes } from 'react';
import NoteIcon from '../svg/note.svg';

const styles = {
  note: {
    maxWidth: '100px',
    overflow: 'hidden',
    maxHeight: '200px'
  }
}

const Note = ({ onDeleteNote, note }) => (
  <div style={styles.note}>
    <div>
      <div><NoteIcon /></div>
      <div>Note #{note.id}</div>
      <div>{note.content}</div>
    </div>

  </div>
);

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired
};

export default Note;

    // <a onClick={onDeleteNote.bind(this, note.id)}>
    //   Remove note
    // </a>