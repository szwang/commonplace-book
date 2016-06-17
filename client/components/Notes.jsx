import React, { Component } from 'react';
import Note from './Note';
import AddNote from './AddNote';
import PlusIcon from '../svg/add.svg';

const styles = {
  notesContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'stretch',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  addButton: {
    display: 'flex',
    marginLeft: '15px',
    cursor: 'pointer'
  }
};


class Notes extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
  }

  showNotePad() {
    this.setState({ open: true })
  }

  closeNotePad() {
    this.setState({ open: false })
  }

  render() {
    const { notes, accounts, addNote, deleteNote } = this.props;

    return (
      <div>
        <h1>{accounts.username}'s Commonplace Book</h1>
        {!!notes.length &&
          <div style={styles.notesContainer}>
            {notes.map(note => (
              <Note 
                    key={`note-${note.id}`}
                    note={note}
                    onDeleteNote={deleteNote} />
            ))} </div>
        }
        {!notes.length &&
          <h1>This book has no notes in it :(</h1>
        }
          <AddNote userId={accounts.id} onAddNote={addNote} open={this.state.open} close={this.closeNotePad.bind(this)}/>
          <div style={styles.addButton} onClick={this.showNotePad.bind(this)}> <PlusIcon /> </div>
      </div>
    )
  }
}

export default Notes
