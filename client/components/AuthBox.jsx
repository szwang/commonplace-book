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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ 
      username: this.refs.username.value,
      email: this.refs.email.value,
      password: this.refs.password.value 
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
          onChange={this.handleChange}
          ref="username" />
        { this.props.showRegister ? <input
          type="text"
          value={this.state.email}
          placeholder="enter email here"
          onChange={this.handleChange} 
          ref="email"/> : null }
        <input
          type="text"
          value={this.state.password}
          placeholder="enter password here"
          onChange={this.handleChange}
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
