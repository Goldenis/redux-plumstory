import React from 'react'
import moment from 'momentjs'
import {debounce} from 'throttle-debounce';
import {Row, Col, DropdownButton, MenuItem, FormControl, FormGroup, InputGroup, Button} from 'react-bootstrap/lib'
import {Table, Thead, Td, Tr, Th} from 'reactable'
import OutlinePanel from './../../UI/panels/OutlinePanel'
import DetailsModal from './ViewFullDetailsModal'
import AddNoteModal from './AddNoteModal'

export default class OrderTable extends React.Component {

  constructor(props) {
    super(props)
    this.handleChangeSearchField = this.handleChangeSearchField.bind(this)
    this.handleChangeStatusField = this.handleChangeStatusField.bind(this)
    this.toggleViewDetailModal = this.toggleViewDetailModal.bind(this)
    this.toggleAddNoteModal = this.toggleAddNoteModal.bind(this)
    this.setSelectedOrder = this.setSelectedOrder.bind(this)
    // this.updateSearch = debounce(1500, this.updateSearch)
    this.updateSearch = this.updateSearch.bind(this)
    this.handleEnterSearchField = this.handleEnterSearchField.bind(this)
    this.updateSearch = this.updateSearch.bind(this)
  }

  componentWillMount() {
    this.setState({
      searchField: this.props.searchField,
      status: this.props.status,
      selectedOrder: 0,
      modalViewDetailsStatus: false,
      modalAddNoteStatus: false
    })
  }

  handleChangeSearchField(e) {
    this.setState({
      searchField: e.target.value
    })
    e.preventDefault()
  }

  handleChangeStatusField(e) {
    this.setState({
      status: e.target.value
    })
  }

  updateSearch() {
    this.props.updateData(this.state)
  }

  toggleViewDetailModal() {
    this.setState({
      modalViewDetailsStatus: !this.state.modalViewDetailsStatus
    })
  }

  toggleAddNoteModal() {
    this.setState({
      modalAddNoteStatus: !this.state.modalAddNoteStatus
    })
  }

  handleEnterSearchField(e) {
    if(e.key === 'Enter') {
      this.props.updateData(this.state)
    }
  }

  setSelectedOrder(id, type = 'full_details') {
    this.setState({
      selectedOrder: id,
    })
    if(type === 'full_details'){
      this.toggleViewDetailModal()
    }else{
      this.toggleAddNoteModal()
    }
  }

  findColumn(item, requiredColumn) {
    return item.column == requiredColumn;
  }


  render() {
    const {ordersList, intl, columns} = this.props

    const supportedColumns = {
      'order_date': {
        key: intl.table.dateAndTime,
        field: (o) => moment(o.created).format("DD/MM/YYYY HH:mm")
      },
      'buyer_name': {
        key: intl.table.nameAndId,
        field: (o) => o.buyer_personal_id + ' & ' + o.buyer_first_name
      },
      'buyer_contact': {
        key: intl.table.emailAndPhone,
        field: (o) => o.buyer_email + ' ' + o.buyer_phone_number
      },
      'buyer_event': {
        key: intl.table.eventName,
        field: (o) => o.event ? (o.event.title || 'n/a') : 'n/a'
      },
      'buyer_amount': {
        key: intl.table.totalAmount,
        field: (o) => o.total_price/10 + ' ₪'
      },
      'buyer_action': {
        key: intl.table.actions.title,
        field: (o) => actions(o._id)
      },
      'buyer_ticket': {
        key: intl.table.ticketsInOrder,
        field: (o) => o.tickets_count
      },
      'buyer_orderID': {
        key: intl.table.orderId,
        field: (o) => o._id
      }
    };

    const actions = (id) => {
      return (
        <DropdownButton bsStyle="default" title="Actions" key={1} id={`dropdown-basic-${1}`}>
          <MenuItem eventKey="1" onClick={() => this.setSelectedOrder(id, 'add_note')}>{intl.table.actions.addNote}</MenuItem>
          <MenuItem eventKey="2" onClick={() => this.setSelectedOrder(id, 'full_details')}>{intl.table.actions.viewFull}</MenuItem>
        </DropdownButton>
      )
    }

    return (
      <div>
        <DetailsModal
          show={this.state.modalViewDetailsStatus}
          toggle={() => this.toggleViewDetailModal()}
          data={(this.state.selectedOrder !== 0 ? ordersList.find(i => i._id === this.state.selectedOrder) : {})}
        />
        <AddNoteModal
          toggle={() => this.toggleAddNoteModal()}
          show={this.state.modalAddNoteStatus}
        />
        <Row>
          <Col md={12}>
            <OutlinePanel
              title={this.props.intl.title}
              body={
                <div>
                {(() => { if (ordersList.length > 0) {
                  return (
                    <div>
                      <Col md={6}>
                        <FormGroup controlId="formInlineName">
                          <InputGroup>
                            <InputGroup.Button>
                              <Button onClick={this.updateSearch}>Search</Button>
                            </InputGroup.Button>
                            <FormControl
                              type="text"
                              placeholder="Search..."
                              style={{width: 250}}
                              value={this.state.searchField}
                              onChange={this.handleChangeSearchField} />
                          </InputGroup>
                        </FormGroup>
                      </Col>

                      <Col md={6}>
                        <FormControl
                          componentClass="select"
                          style={{width: 250}}
                          onChange={this.handleChangeStatusField}>
                            <option name="COMPLETED">{intl.statuses.completed}</option>
                            <option name="CANCELED">{intl.statuses.canceled}</option>
                            <option name="ABANDONED">{intl.statuses.abandoned}</option>
                        </FormControl>
                      </Col>
                      <Table
                        className="table"
                        sortable={this.props.sortable}
                        itemsPerPage={10} pageButtonLimit={5} currentPage={this.props.page}>
                        <Thead>
                        {columns.map(item => {  return (
                          <Th column={item}>{supportedColumns[item].key}</Th>
                        )})}
                        </Thead>
                        { ordersList.map(o => {
                          return (
                            <Tr>
                            { columns.map(item => {
                              return (
                                <Th column={item}>{supportedColumns[item].field(o)}</Th>
                              )
                            })}
                            </Tr>
                          )
                          })}
                      </Table>
                    </div>
                  )
                } else {
                  return (<p>There are no orders</p>)
                } })() }
                </div>
              }/>
          </Col>
        </Row>
      </div>
    )
  }
}
