import {
  ADD_NOTE_SUCCESS,
  REQUEST_NOTES_SUCCESS,
  DELETE_NOTE_SUCCESS
} from '../actionTypes/notes';

// array of notes, with structure
// { id: 1, content: 'fdafafda', category: 'fdafdafda'}
const INITIAL_STATE = []; 

// const addNote = (state, action) => ([
//   ...state,
//   action.note
// ]);

// const requestNotes = (state, action) => ([
//   ...state,  
//   ...action.notes
// ]);

// const deleteNote = (state, action) => (
//   state.filter(note => note.id !== action.noteId)
// );


// export default function notes(state = INITIAL_STATE, action) {
//   switch (action.type) {
//     case ADD_NOTE_SUCCESS: 
//       return { ...state, action.note};

//     case REQUEST_NOTES_SUCCESS:
//       return {...state, action.notes};

//     case DELETE_NOTE_SUCCESS:
//       return state.filter(note => note.id !== action.noteId)

//     default:
//       return state;
//   }
// }

const note = (state, action) => {
  switch(action.type) {
    case ADD_NOTE_SUCCESS:
      return action.note

    default:
      return state
  }
}

const notes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NOTE_SUCCESS: 
      return [
        ...state,
        note(undefined, action)
      ]

    case REQUEST_NOTES_SUCCESS:
      return action.notes

    default:
      return state
  }
}

export default notes;
