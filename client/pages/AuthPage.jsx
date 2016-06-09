import React, { Component } from 'react';
import useSheet from 'react-jss';
import { connect } from 'react-redux';
import { loginUser, registerUser } from '../actions/auth';
import AuthContainer from '../containers/AuthContainer';


class AuthPage extends Component {
  componentDidMount() {
  }

  render() {

    return (
      <div>
        <AuthContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(
  mapStateToProps
)(AuthPage);

