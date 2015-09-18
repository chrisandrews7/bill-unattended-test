import React from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';

import Sidebar from 'components/screens/bill/sidebar/Sidebar';
import ItemisedBill from 'components/screens/bill/itemisedBill/ItemisedBill';

import './BillScreen.scss';

export default class BillScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid className="bill">
        <Row>
          <Col xs={12}>
            <PageHeader>My Bill</PageHeader>
          </Col>
        </Row>
        <Row>
        <Col sm={8}>
          <ItemisedBill />
        </Col>
        <Col sm={4}>
          <Sidebar />
        </Col>
      </Row>
      </Grid>
    );
  }

}
