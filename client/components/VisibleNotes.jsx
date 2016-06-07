import { connect } from 'react-redux'
import { addNote, deleteNote } from '../actions/notes'
import Notes from './Notes'

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: () => {
      dispatch(addNote({ content: 'hi', category: 'book'}))
    },
    deleteNote: () => {
      dispatch(deleteNote())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notes);