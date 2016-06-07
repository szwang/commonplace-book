import React from 'react'
import { connect } from 'react-redux'
import { addNote } from '../actions/notes'

let AddNote = ({ dispatch }) => {
  let content, category

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addNote({ content: content.value, category: category.value}))
        input.value = ''
      }}>
        <input ref={node => {
          category = node
        }} />
        <input ref={ node => {
          content = node
        }} />
        <button type="submit">
          Add Note
        </button>
      </form>
    </div>
  )
}

AddNote = connect()(AddNote)

// class AddNote extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       content: null,
//       category: null
//     }
//   }

//   render() {
//     return (
//       <div>
//         <Modal show={this.props.showNoteModal}>
//         <Modal.Footer>
//           <Button>Close</Button>
//         </Modal.Footer>
//         </Modal>
//       </div>
//     )
//   }
// }

export default AddNote
