import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNote } from '../actions/notes'

class AddNote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: '',
      category: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ 
      content: this.refs.content.value,
      category: this.refs.category.value 
    })
  }

  render() {
    const { onAddNote } = this.props;
    
    return (
      <div> 
        <input
          type="text"
          value={this.state.content}
          placeholder="enter content here"
          onChange={this.handleChange}
          ref="content" />
        <input 
          type="text"
          value={this.state.category}
          placeholder="enter category here"
          onChange={this.handleChange}
          ref="category" />
        <button onClick={onAddNote.bind(this, this.state)}>
          Add Note
        </button>
      </div>
    )
  }
}

export default AddNote
