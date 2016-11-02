import React from 'react';
import { Link } from 'react-router'
import { Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap'

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}


export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({
      email: 'alexey@plumflowerinternational.com',
      password: 'password1'
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.Login({email: this.state.email, password: this.state.password});
  }

  render() {
    return (
      <Row>
        <Col md={6}>
          <form onSubmit={this.handleSubmit}>
            <FieldGroup
              id="formControlsEmail"
              type="email"
              label="Email address"
              placeholder="Enter email"
              value={this.state.email}
              onChange={(e) => { this.setState({ email: e.target.value })}}
            />
            <FieldGroup
              id="formControlsPassword"
              label="Password"
              type="password"
              value={this.state.password}
              onChange={(e) => { this.setState({ password: e.target.value })}}
            />
            <Button type="submit">
              Submit
            </Button>
          </form>
        </Col>
      </Row>
  )
  }
}
