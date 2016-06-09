import { connect } from 'react-redux'
import { registerUser, loginUser } from '../actions/auth'
import AuthBox from '../components/AuthBox'

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
)(AuthBox);

