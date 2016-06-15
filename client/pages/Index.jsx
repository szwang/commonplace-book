import React, { Component } from 'react';
import AddNote from '../components/AddNote';
import { connect } from 'react-redux';
import { requestNotes } from '../actions/notes';
import { Link } from 'react-router';

const styles = {
  page: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a8b6bf'
  },
  landingButton: {
    height: '80px',
    fontSize: '25px',
    borderRadius: '5px',
    color: '#7d4627',
    backgroundColor: '#c9d8c5',
    marginTop: '10px',
    width: '180px',
    cursor: 'pointer',
    border: 'none'
  }
}

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

    return (
      <div style={styles.page}>
        { id ? <Link to='/notebook'><button style={styles.landingButton}>Notebook</button></Link> :
            <Link to='/auth'><button style={styles.landingButton}>Login/Register</button></Link> }
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
