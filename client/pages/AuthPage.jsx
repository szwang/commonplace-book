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
    justifyContent: 'center',
    backgroundColor: '#a8b6bf'
  },
  container: {
    color: '#7d4627',
    marginBottom: '150px'
  },
  loginRegisterContainer: {
    marginBottom: '30px'
  },
  loginRegisterActive: {
    fontSize: '30px',
    fontWeight: '900'
  },
  loginRegisterDormant: {
    fontSize: '25px',
    cursor: 'pointer',
    color: '#e2e6e9'
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
      <div style={styles.container}>
      <div style={styles.loginRegisterContainer}>
        {this.state.registerUser ? 
          <div><a style={styles.loginRegisterDormant} onClick={this.toggleAuth}>LOGIN / </a><span style={styles.loginRegisterActive}>REGISTER</span></div>
        : <div><span style={styles.loginRegisterActive}>LOGIN</span><a style={styles.loginRegisterDormant} onClick={this.toggleAuth}> / REGISTER</a></div>}
      </div>
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

