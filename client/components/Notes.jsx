import React, { Component } from 'react';
import Note from './Note';
import AddNote from './AddNote';
import PlusIcon from '../svg/add.svg';

const styles = {
  basket: {
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
      showNotePad: false
    }
  }

  showNotePad() {
    this.setState({ showNotePad: true })
  }

  render() {
    const { notes, addNote, deleteNote } = this.props;

    return (
      <div>
        <h1>Suzanne's Commonplace Book</h1>
        {!!notes.length &&
          <div style={styles.basket}>
            {notes.map(note => (
              <Note 
                    key={`note-${note.id}`}
                    note={note}
                    onDeleteNote={deleteNote} />
            ))}
          {this.state.showNotePad ? 
            <AddNote onAddNote={addNote} /> : 
            <div style={styles.addButton} onClick={this.showNotePad.bind(this)}> <PlusIcon /> </div>
          }
          </div>
        }
        {!notes.length &&
          <h1>This book has no notes in it :(</h1>
        }
      </div>
    )
  }
}

export default Notes
