import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthBox from '../components/AuthBox';
import { push } from 'react-router-redux';

const styles = {
  page: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {

  },
  loginRegister: {
    marginBottom: '30px',
    fontSize: '30px'
  }
}
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

    return (
      <div style={styles.page}>
      <div>{this.state.registerUser ? <div><a onClick={this.toggleAuth}>LOGIN</a> / REGISTER</div>
        : <div>LOGIN / <a onClick={this.toggleAuth}>REGISTER</a></div>}
        <AuthBox {...this.props} showRegister={this.state.registerUser} /></div>
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

