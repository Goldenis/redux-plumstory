import React from 'react';
import { connect } from 'react-redux';
import Component from './Component';

@connect(state => {
  return {router: state.router};
})
export default class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    return <Component />
  }
}
