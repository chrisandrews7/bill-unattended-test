import React from 'react';

import BillStore from 'stores/BillStore';
import BillActions from 'actions/BillActions';

import Total from 'components/elements/total/Total';
import Panel from 'components/controls/panel/Panel';
import PanelGroup from 'components/controls/panelGroup/PanelGroup';
import Table from 'components/controls/table/Table';

import './ItemisedBill.scss';

export default class ItemisedBill extends React.Component {

  constructor(props) {
    super(props);

    this.onStoreChanged = this.onStoreChanged.bind(this);

    this.state = {
      bill: BillStore.getState().bill
    };
  }

  componentWillMount() {
    BillStore.listen(this.onStoreChanged);
    BillActions.requestBill();
  }

  componentWillUnmount() {
    BillStore.unlisten(this.onStoreChanged);
  }

  onStoreChanged(state) {
    this.setState({
      bill: state.bill
    });
  }

  render() {
    if (!this.state.bill) {
      return <div>Loading...</div>;
    }

    return (
      <div className="itemised-bill">

        <PanelGroup defaultActiveKey="1">

          <Panel title="Subscriptions" total={this.state.bill.package.total} eventKey="1">
            <Table headings={['Type', 'Name', 'Cost']} rows={this.state.bill.package.subscriptions} />
          </Panel>

          <Panel title="Call Charges" total={this.state.bill.callCharges.total} eventKey="2">
            <Table headings={['Number', 'Duration', 'Cost']} rows={this.state.bill.callCharges.calls} />
          </Panel>

          <Panel title="Sky Store" total={this.state.bill.skyStore.total} eventKey="3">
            <h4>Rentals</h4>
            <Table headings={['Title', 'Cost']} rows={this.state.bill.skyStore.rentals} />
            <h4>Buy &amp; Keep</h4>
            <Table headings={['Title', 'Cost']} rows={this.state.bill.skyStore.buyAndKeep} />
          </Panel>

        </PanelGroup>

        <Total due={this.state.bill.statement.due}
          total={this.state.bill.total}
          generated={this.state.bill.statement.generated}
          period={this.state.bill.statement.period}
        />

      </div>
    );
  }

}
