import React from 'react';
import useSheet from 'react-jss';
import { connect } from 'react-redux';
import { loginUser } from '../actions/auth';

const STYLES = {
};

const AuthBox = ({ sheet, loginUser }) =>
  <div>
    <form>
      <input type="username" />
      <input type="password" />
      <button type="submit">Submit</button>
    </form>
  </div>;

export default connect(
  state => ({ loggedInUserId: state.loggedInUserId }),
  { loginUser }
)(
  useSheet(AuthBox, STYLES)
)