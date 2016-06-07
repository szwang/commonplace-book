import React, { Component } from 'react';
// import useSheet from 'react-jss';
import VisibleNotes from '../components/VisibleNotes';
import { connect } from 'react-redux';
import { requestNotes } from '../actions/notes';

const indexStyle = {
  width: '100%',
  display: 'flex',
  backgroundColor: '#edd9c0',
  color: '#7d4627'
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
        <VisibleNotes />
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
