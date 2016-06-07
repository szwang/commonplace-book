import React, { PropTypes } from 'react';
// import useSheet from 'react-jss';
import NoteIcon from '../svg/note.svg';

// const STYLES = {
//   note: {
//     textDecoration: 'none',
//     display: 'flex',
//     flexDirection: 'column',
//     flexBasis: '33%',
//     padding: '0.5rem',
//     boxSizing: 'border-box'
//   },
//   button: {
//     padding: '1rem 1.5rem',
//     background: '#FFAAAA',
//     '&:hover': {
//       background: '#FFBBBB'
//     },
//     border: 0,
//     borderRadius: '0.5rem',
//     cursor: 'pointer',
//     textAlign: 'center',
//     userSelect: 'none'
//   },
//   info: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',

//     '& svg': {
//       fill: 'currentColor'
//     }
//   },
//   delete: {
//     display: 'none',
//     '&:hover': {
//       display: 'block'
//     }
//   }
// };

const COLORS = [
  '#FFAAAA', '#FFAAFF', '#AAAAFF', '#FFFFAA',
  '#339933', '#333399', '#993399', '#339999'
];



const Note = ({ onDeleteNote, note }) => (
  <div>
    <span>x</span>
    <div>
      <div style={{ color: COLORS[note.id % 8] }}><NoteIcon /></div>
      <div>Note #{note.id}</div>
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
