import React, { Component } from 'react';
import useSheet from 'react-jss';
import { connect } from 'react-redux';
import { loginUser } from '../actions/auth';
import AuthBox from '../components/AuthBox';

const STYLES = {
  authPage: {

  }
};

export default class AuthPage extends Component {
  componentDidMount() {
  }

  render() {

    return (
      <div>
        <AuthBox />
      </div>
    );
  }
}

export default connect(
  () => ({}),
  { loginUser }
)(
  useSheet(AuthPage, STYLES)
);
