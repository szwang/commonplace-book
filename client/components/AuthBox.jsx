import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push, browserHistory } from 'react-router-redux';
import { loginUser, registerUser } from '../actions/auth';

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
    const { registerUser, loginUser } = this.props;

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
                <button onClick={this.onClick}> Register </button> :
                <button onClick={this.onClick}> Login </button>
              }
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
