import React, { Component } from 'react';
import NoteContainer from '../containers/NoteContainer';
import Notes from '../components/Notes';
import { connect } from 'react-redux';
import { requestNotes } from '../actions/notes';
import { logoutUser } from '../actions/auth';
import { push } from 'react-router-redux';

const notebookPageStyle = {
  width: '100%',
  display: 'flex',
  backgroundColor: '#edd9c0',
  color: '#7d4627',
  paddingLeft: '20px'
}

class NotebookPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestNotes(this.props.accounts.id);
  }

  render() {
    const { logoutUser } = this.props;
    const { id, username, logoutSuccess } = this.props.accounts;

    if(logoutSuccess) {
      push('/')
    }

    return (
      <div style={notebookPageStyle}>
        <div onClick={logoutUser.bind(this, { id: id, username: username })}>Logout</div>
        <Notes {...this.props}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { notes, accounts } = state;

  return { 
    notes,
    accounts
  }
}

export default connect(
  mapStateToProps, 
  { logoutUser, requestNotes, push }
)(NotebookPage);
