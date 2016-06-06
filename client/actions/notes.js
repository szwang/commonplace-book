import * as actionTypes from '../actionTypes/notes';
import { get, post, del } from '../utils/api';

export function addNote() {
  return async dispatch => {
    dispatch({
      type: actionTypes.ADD_NOTE
    });

    try {
      const result = await post('/api/cp-book');

      dispatch({
        type: actionTypes.ADD_NOTE_SUCCESS,
        note: result
      });
    } catch(e) {
      dispatch({
        type: actionTypes.ADD_NOTE_ERROR
      });
    }
  }
}

export function requestNotes() {
  return async dispatch => {
    dispatch({
      type: actionTypes.REQUEST_NOTES
    });

    try {
      const result = await get('/api/cp-book');
      dispatch({
        type: actionTypes.REQUEST_NOTES_SUCCESS,
        notes: result
      });
    } catch(e) {
      dispatch({
        type: actionTypes.REQUEST_NOTES_ERROR
      });
    }
  }
}

export function deleteNote(noteId) {
  return async dispatch => {
    dispatch({
      type: actionTypes.DELETE_NOTE,
      noteId
    });

    try {
      await del(`/api/cp-book/${noteId}`);

      dispatch({
        type: actionTypes.DELETE_NOTE_SUCCESS,
        noteId
      });
    } catch(e) {
      dispatch({
        type: actionTypes.DELETE_NOTE_ERROR,
        noteId
      });
    }
  }
}
