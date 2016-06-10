import React, { Component } from 'react';
import { connect } from 'react-redux';

const styles = {
  form: {
    marginTop: '200px',
    marginLeft: '500px'
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

  render() {
    const { loginUser, registerUser, showRegister } = this.props;
        
    return (
      <div style={styles.form}>
        <input 
          type="text"
          value={this.state.username}
          placeholder="enter username here"
          onChange={this.handleUsernameChange.bind(this)}
          ref="username" />
        { this.props.showRegister ? <input
          type="text"
          value={this.state.email}
          placeholder="enter email here"
          onChange={this.handleEmailChange.bind(this)} 
          ref="email"/> : null }
        <input
          type="text"
          value={this.state.password}
          placeholder="enter password here"
          onChange={this.handlePasswordChange.bind(this)}
          ref="password"/>
        { this.props.showRegister ? 
                <button onClick={registerUser.bind(this, {
                            username: this.state.username, 
                            password: this.state.password,
                            email: this.state.email })}> Register </button> :
                <button onClick={loginUser.bind(this, {
                            username: this.state.username, 
                            password: this.state.password})}> Login </button>
              }
      </div>
    )
  }
}

export default AuthBox;
