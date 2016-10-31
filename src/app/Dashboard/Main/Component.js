import React from 'react'
import moment from 'moment'
import {Grid, Row, Col} from 'react-bootstrap/lib'
import {Table, Thead, Td, Tr, Th} from 'reactable'
import StatsWidget  from './../../../components/UI/widgets/StatsWidget'
import SimpleWidget from './../../../components/UI/widgets/SimpleWidget'
import OutlinePanel from './../../../components/UI/panels/OutlinePanel'

export default (props) => {
  const {user, events} = props
  return (
    <div>
      <Row>
        <Col md={6}>
          <SimpleWidget
            title={`Hi, ${user.first_name}`}
            text={`Welcome on board`}
            count={`${moment().format('HH:mm')}`}
            />
        </Col>
        <Col md={6}>
          <SimpleWidget />
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <StatsWidget
            title="Number of sales today"
            icon="fa fa-ticket"
            count="48"
            countStyle="success"
            footer="+16 than last day"
            footerStyle="success"
            />
        </Col>

        <Col md={3}>
          <StatsWidget
            title="Number of sales this week"
            icon="fa fa-ticket"
            count="148"
            countStyle="warning"
            footer="0 than last week"
            footerStyle="warning"
            />
        </Col>

        <Col md={3}>
          <StatsWidget
            title="Number of sales this month"
            icon="fa fa-ticket"
            count="568"
            countStyle="text-danger"
            footer="-2 than last month"
            footerStyle="danger"
            />
        </Col>

        <Col md={3}>
          <StatsWidget
            title="Number of active events "
            icon="fa fa-ticket"
            count="13"
            countStyle="success"
            footer="+ 4 events"
            footerStyle="success"
            />
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <OutlinePanel
            title="Events list"
            body={
              <Table className="table" sortable={['title','status', 'public']}>
                <Thead>
                  <Th column="title">Title</Th>
                  <Th column="status">Status</Th>
                  <Th column="public">Is public</Th>
                </Thead>
                {events.map(e => {
                  return (
                    <Tr>
                      <Td column="title">{e.title}</Td>
                      <Td column="status">{e.status}</Td>
                      <Td column="public">{e.isPublic ? "yes" : "no"}</Td>
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
