import React from 'react'
import moment from 'moment'
import { Grid, Row, Col, FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap/lib'
import DropdownButton from 'react-bootstrap/lib/DropdownButton'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import {Table, Thead, Td, Tr, Th} from 'reactable'
import OutlinePanel from './../../../components/UI/panels/OutlinePanel'
import { DateRange } from 'react-date-range'
import { Link } from 'react-router'

export default class EventsComponent extends React.Component {
  
  constructor(props) {
    super(props)
    this.handleChangeSearchField = this.handleChangeSearchField.bind(this)
    this.handleChangeStatusField = this.handleChangeStatusField.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentWillMount() {
    this.setState({
      searchField: '',
      status: '',
      offset: 0
    })
  }

  handleChangeSearchField(e) {
    this.setState({
      searchField: e.target.value
    })
  }

  handleChangeStatusField(e) {
    this.setState({
      status: e.target.value
    })
  }

  handleSearch(e) {
    this.props.updateData(this.state)
  }

  render() {
    const {eventsList, intl} = this.props
    return (
      <div>
        <Row>
          <Col md={6}>
              <FormGroup controlId="formInlineName">
                  <InputGroup>
                      <InputGroup.Button>
                          <Button onClick={this.handleSearch}>Search</Button>
                      </InputGroup.Button>
                      <FormControl
                        type="text"
                        placeholder={intl.search}
                        style={{width: 250}}
                        value={this.state.searchField}
                        onChange={this.handleChangeSearchField} />                      
                  </InputGroup>
              </FormGroup>
          </Col>

          <Col md={6}>
            <select
              className="form-control pull-right"
              style={{width: 250}}
              onChange={this.handleChangeStatusField}>
                <option value="">{intl.status.all}</option>
                <option value="active">{intl.status.active}</option>
                <option value="inactive">{intl.status.inactive}</option>
                <option value="canceled">{intl.status.canceled}</option>
                <option value="deleted">{intl.status.deleted}</option>
                <option value="merged">{intl.status.merged}</option>
                <option value="draft">{intl.status.draft}</option>
            </select>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={12}>
            <OutlinePanel
              title="Events list"
              body={
                <Table className="table" sortable={true} itemsPerPage={25} pageButtonLimit={5} currentPage={0}>
                  <Thead>
                    <Th column="title">{intl.table.all}</Th>
                    <Th column="date">{intl.table.all}</Th>
                    <Th column="tickets_purchased_count">{intl.table.all}</Th>
                    <Th column="location">{intl.table.all}</Th>
                    <Th column="status">{intl.table.all}</Th>
                    <Th column="action">{intl.table.all}</Th>
                  </Thead>  
                  {eventsList.map(e => {
                    var cdate = ''
                    if (e.date) {
                      cdate = moment(e.date).format('mm/D/YYYY')
                    }
                    var place = ''
                    place = ( e.place ? e.place.name : '' )
                    return (
                      <Tr>
                        <Td column="title"><Link to={{ 
                          pathname: `/dashboard/event/${e._id}/orders`, 
                          query: { 
                            title: e.title
                          }
                        }}  >{e.title}</Link></Td>
                        <Td column="date">{cdate}</Td>
                        <Td column="tickets_purchased_count">{e.tickets_purchased_count}</Td>
                        <Td column="location">{place}</Td>
                        <Td column="status">{e.status}</Td>
                        <Th column="action">
                          <DropdownButton title="Action">
                            <MenuItem href="#">Activate</MenuItem>
                            <MenuItem href="#">Paused</MenuItem>
                          </DropdownButton>
                        </Th>
                      </Tr>
                    )
                  })}
                </Table>
              }/>
          </Col>
        </Row>
      </div>
    )
  }
}
