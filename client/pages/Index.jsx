import React, { Component } from 'react';
import NoteContainer from '../containers/NoteContainer';
import AddNote from '../components/AddNote';
import { connect } from 'react-redux';
import { requestNotes } from '../actions/notes';

const indexStyle = {
  width: '100%',
  display: 'flex',
  backgroundColor: '#edd9c0',
  color: '#7d4627',
  paddingLeft: '20px'
}

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(requestNotes());
  }

  render() {
    return (
      <div style={indexStyle}>
        <NoteContainer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { notes } = state;
  return { 
    notes 
  }
}

export default connect(mapStateToProps)(Index);
