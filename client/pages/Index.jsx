import React, { Component } from 'react';
import NoteContainer from '../containers/NoteContainer';
import AddNote from '../components/AddNote';
import { connect } from 'react-redux';
import { requestNotes } from '../actions/notes';
import { Link } from 'react-router';

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
  }

  render() {
    const { id } = this.props.accounts;
    console.log('user_id', id)

    return (
      <div>
        <div>Hello World</div>
        { id ? <Link to='/notebook'>Notebook</Link> :
            <Link to='/auth'>Login/Register</Link> }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { accounts } = state;
  console.log(accounts)
  return { 
    accounts
  }
}


export default connect(mapStateToProps)(Index);
