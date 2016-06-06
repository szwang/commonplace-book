import * as actionTypes from '../actionTypes/notes';

const DEFAULT_STATE = [];

const addNote = (state, action) => ([
  ...state,
  action.note
]);

const requestNotes = (state, action) => ([
  ...state,
  ...action.notes
]);

const deleteNote = (state, action) => (
  state.filter(note => note.id !== action.noteId)
);


export default function notes(state = DEFAULT_STATE, action) {
  return ({
    [actionTypes.ADD_NOTE_SUCCESS]: addNote,
    [actionTypes.REQUEST_NOTES_SUCCESS]: requestNotes,
    [actionTypes.DELETE_NOTE_SUCCESS]: deleteNote
  }[action.type] || (s => s))(state, action);
}
