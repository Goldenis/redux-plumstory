import React from 'react';
import { connect } from 'react-redux';
import Component from './InfoComponent';

@connect(state => {
  return {router: state.router};
})
export default class InfoContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    return <Component />        
  }
}
