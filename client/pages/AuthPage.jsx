import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    const { authSuccess } = this.props.accounts;
    console.log('authSuccess:', authSuccess)

    return (
      <div>
      <div onClick={this.toggleAuth.bind(this)}>
        {this.state.registerUser ? <span>Switch to login </span>
          : <span>Switch to register </span>}</div>
        <AuthBox authSuccess={authSuccess} showRegister={this.state.registerUser} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { accounts } = state;
  return {
    accounts
  }
}


export default connect(mapStateToProps)(AuthPage);

