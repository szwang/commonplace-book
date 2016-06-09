import { connect } from 'react-redux'
import { addNote, deleteNote } from '../actions/notes'
import Notes from '../components/Notes'

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (data) => {
      dispatch(addNote(data))
    },
    deleteNote: (id) => {
      dispatch(deleteNote(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notes);