import React from 'react';
import { Link } from 'react-router'
import { Row, Col } from 'react-bootstrap/lib'
require('isomorphic-fetch');

export default class InfoComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({
      info: ''
    });

    let that = this;

    fetch('http://212.47.246.115:9510/info')
    .then(function(response) {
      if (response.status >= 400) {
          throw new Error("Bad response from server");
      }
      response.json().then(function(response) {
        that.setState({info: response.data.info});
      });
    })
    .then(function(stories) {
        console.log(stories);
    });
  }

  render() {
    return <div>
      <h1>{this.state.info}</h1>
    </div>
  }
}
