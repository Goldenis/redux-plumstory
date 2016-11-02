import React from 'react';
import { Link } from 'react-router'
import { Row, Col } from 'react-bootstrap/lib'
import { Button } from 'react-bootstrap'

export default class Component extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    return (<div>
      <h1>Welcome</h1>
      <Button>Update</Button>
    </div>)
  }
}
