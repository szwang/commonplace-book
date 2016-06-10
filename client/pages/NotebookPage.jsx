import React, { Component } from 'react';
import NoteContainer from '../containers/NoteContainer';
import AddNote from '../components/AddNote';
import { connect } from 'react-redux';
import { requestNotes } from '../actions/notes';
import { logoutUser } from '../actions/auth';

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
    this.props.requestNotes();
  }

  render() {
    const { logoutUser } = this.props;
    const { id, username } = this.props.accounts;

    return (
      <div style={notebookPageStyle}>
        <div onClick={logoutUser.bind(this, { id: id, username: username })}>Logout</div>
        <NoteContainer />
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

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: (data) => {
      dispatch(logoutUser(data))
    },
    requestNotes: () => {
      dispatch(requestNotes())
    }
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(NotebookPage);
