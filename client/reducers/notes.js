import {
  ADD_NOTE_SUCCESS,
  REQUEST_NOTES_SUCCESS,
  DELETE_NOTE_SUCCESS,
  MOVE_NOTE
} from '../actionTypes/notes';

// array of notes, with structure
// { id: 1, content: 'fdafafda', category: 'fdafdafda'}
const INITIAL_STATE = []; 

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
      return action.notes.map((val, key) => {
        if(!val.top) {
          val.top = Math.floor((Math.random() * 400) + 1)
        }
        if(!val.left) {
          val.left = Math.floor((Math.random() * 900) + 1)
        }
        return val;
      })

    case DELETE_NOTE_SUCCESS:
      return state.filter((note) => {
        return note.id != action.noteId
      })

    case MOVE_NOTE:
      return state.map((val, key) => {
        if(val.id === action.noteId) {
          console.log('found move', val.id, action.noteId)
          console.log(Object.assign(val, { top: action.top, left: action.left }))
          return Object.assign(val, { top: action.top, left: action.left })
        } else {
          return val;
        }
      })

    default:
      return state
  }
}

export default notes;
