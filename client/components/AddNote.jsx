import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNote } from '../actions/notes'
import Modal from 'react-modal'

const styles = {
  overlay: {
    backgroundColor: 'papayawhip'
  },
  content: {
    color: 'lightsteelblue'
  }
}

class AddNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      category: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ 
      content: this.refs.content.value,
      category: this.refs.category.value,
      source: this.refs.source.value
    })
  }

  render() {
  const { onAddNote } = this.props;

    return (
      <div>
        <Modal
          style={styles}
          isOpen={this.props.open}
          onRequestClose={this.props.close}>
          <h2>Enter a new note here</h2>
          <div> <input 
            type="text"
            value={this.state.category}
            placeholder="enter category here"
            onChange={this.handleChange}
            ref="category" /> </div>
          <div> <textarea
            type="text"
            value={this.state.content}
            placeholder="enter content here"
            onChange={this.handleChange}
            ref="content"> </textarea> </div>
          <div> <input
            type="text"
            value={this.state.source}
            placeholder="enter source here"
            onChange={this.handleChange}
            ref="source" /> </div>
          <div> <button onClick={onAddNote.bind(this, this.state)}>
            Add Note
          </button> </div>
        </Modal>
      </div>
    );
  }
}


export default AddNote
