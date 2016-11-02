import React from 'react';
import { connect } from 'react-redux';
import Component from './Component';
import {Login} from './action.js'

@connect(state => {
  return {router: state.router};
}, dispatch => {
    return {
      Login: (data) => dispatch(Login(data))
    };
  }
)
export default class SigninContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    return <Component Login={(data) => this.props.Login(data)} />
  }
}
