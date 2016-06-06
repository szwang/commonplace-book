import React, { Component } from 'react';
import useSheet from 'react-jss';
import Notes from '../components/Notes';
import { connect } from 'react-redux';
import { requestNotes } from '../actions/notes';

const STYLES = {
  index: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFDDDD',
    color: '#660000'
  }
};

export default class Index extends Component {
  componentDidMount() {
    this.props.requestNotes();
  }

  render() {
    const { sheet } = this.props;

    return (
      <div className={sheet.classes.index}>
        <Notes />
      </div>
    );
  }
}

export default connect(
  () => ({}),
  { requestNotes }
)(
  useSheet(Index, STYLES)
);
