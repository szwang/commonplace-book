import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push, browserHistory } from 'react-router-redux';
import { loginUser, registerUser } from '../actions/auth';

const styles = {
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  inputField: {
    height: '25px',
    fontSize: '20px',
    width: '200px',
    marginBottom: '10px'
  },
  button: {
    height: '30px',
    fontSize: '15px',
    borderRadius: '5px',
    color: '#7d4627',
    backgroundColor: '#c9d8c5',
    marginTop: '10px',
    width: '80px',
    cursor: 'pointer',
    /* box-shadow: none, */
    /* text-shadow: none, */
    border: 'none'
  }
};

class AuthBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email:'',
      password: ''
    }

    this.onClick = this.onClick.bind(this);
  }

  handleUsernameChange() {
    this.setState({ 
      username: this.refs.username.value
    })
  }

  handlePasswordChange() {
    this.setState({ 
      password: this.refs.password.value 
    })
  }

  handleEmailChange() {
    this.setState({ 
      email: this.refs.email.value 
    })
  }

  onClick() {
    const { registerUser, loginUser, push } = this.props;

    if(this.props.showRegister) {
      registerUser(this.state);
    } else {
      loginUser(this.state);
    }
  }

  render() {
    const { loginSuccess, showRegister, push } = this.props;
    
    if(loginSuccess) {
      push('/notebook')
    } 

    return (
      <div style={styles.form}>
      <div><div>Username</div>
        <div><input 
          style={styles.inputField}
          type="text"
          value={this.state.username}
          onChange={this.handleUsernameChange.bind(this)}
          ref="username" /></div></div>
      { this.props.showRegister ? <div><div>Email</div>
        <div><input
        style={styles.inputField}
        type="text"
        value={this.state.email}
        onChange={this.handleEmailChange.bind(this)} 
          ref="email"/></div></div> : null }
      <div><div>Password</div>
        <div><input
          style={styles.inputField}
          type="password"
          value={this.state.password}
          onChange={this.handlePasswordChange.bind(this)}
          ref="password"/></div></div>
          <button style={styles.button} onClick={this.onClick}>
            { this.props.showRegister ? <span>Register</span> : <span>Login</span> } </button>
      </div>
    )
  }
}

const mapStateToProps = (dispatch) => {
  return {

  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loginUser: (data) => {
//       dispatch(loginUser(data))
//     },
//     registerUser: (data) => {
//       dispatch(registerUser(data))
//     },
//     push: (route) => {
//       dispatch(push(route))
//     }
//   }
// }

export default connect(mapStateToProps, { loginUser, registerUser, push })(AuthBox);
