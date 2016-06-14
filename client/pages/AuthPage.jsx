import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthBox from '../components/AuthBox';
import { push } from 'react-router-redux';


class AuthPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      registerUser: true
    }

    this.toggleAuth = this.toggleAuth.bind(this);
  }

  componentDidMount() {
    this.ensureNotLoggedIn(this.props); 
  }

  ensureNotLoggedIn(props) {
    const { push } = props;
    const { isAuthenticated } = props.accounts;

    if(isAuthenticated) {
      push('/notebook');
    }
  }

  toggleAuth() {
    this.setState({ registerUser: !this.state.registerUser})
  }

  render() {
    const { push } = this.props;
    const { isAuthenticated } = this.props.accounts;

    if(isAuthenticated) {
    }

    return (
      <div>
      {this.state.registerUser ? <div><a onClick={this.toggleAuth}>Login</a>/Register</div>
        : <div>Login/<a onClick={this.toggleAuth}>Register</a></div>}
        <AuthBox {...this.props} showRegister={this.state.registerUser} />
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

export default connect(mapStateToProps, { push })(AuthPage);

