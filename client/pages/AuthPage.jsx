import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser, registerUser } from '../actions/auth';
import AuthBox from '../components/AuthBox';


class AuthPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      registerUser: true
    }
  }

  toggleAuth() {
    this.setState({ registerUser: !this.state.registerUser})
  }

  render() {

    return (
      <div onClick={this.toggleAuth.bind(this)}>
        {this.state.registerUser ? <div>Switch to login</div> 
          : <div>Switch to register</div> }
        <AuthBox {...this.props} showRegister={this.state.registerUser} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (data) => {
      dispatch(loginUser(data))
    },
    registerUser: (data) => {
      dispatch(registerUser(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthPage);

