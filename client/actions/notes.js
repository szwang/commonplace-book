import * as actionTypes from '../actionTypes/notes';
import { get, post, del } from '../utils/api';
import { transitionTo } from 'react-router';

export function addNote(data) {
      console.log(data)

  return async dispatch => {
    dispatch({
      type: actionTypes.ADD_NOTE
    });

    try {
      const result =  await post('/api/cp-book', data);

      dispatch({
        type: actionTypes.ADD_NOTE_SUCCESS,
        note: result
      });


    } catch(e) {
      console.log('error:', e)
      dispatch({
        type: actionTypes.ADD_NOTE_ERROR
      });
    }
  }
}

export function requestNotes(userId) {
  console.log('action: requestNotes', userId)
  return async dispatch => {
    dispatch({
      type: actionTypes.REQUEST_NOTES,
      userId
    });

    try {
      const result = await get(`/api/allNotes/${userId}`);
      console.log(result)
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
