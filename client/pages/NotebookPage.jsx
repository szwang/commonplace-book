import React, { Component } from 'react';
import NoteContainer from '../containers/NoteContainer';
import Notes from '../components/Notes';
import { connect } from 'react-redux';
import { requestNotes, addNote } from '../actions/notes';
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

  onClickLogout() {
    const { logoutUser } = this.props;
    const { id, username } = this.props.accounts;
    logoutUser({
      id: id,
      username: username
    })
  }

  render() {

    return (
      <div style={notebookPageStyle}>
        <div onClick={this.onClickLogout.bind(this)}>Logout</div>
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
  { addNote, logoutUser, requestNotes, push }
)(NotebookPage);
