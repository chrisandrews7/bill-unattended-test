import alt from 'control';
import BillActions from 'actions/BillActions';

class BillStore {

	constructor() {
		this.bill;
    this.bindActions(BillActions);
	}

	onRequestBill(data) {
		this.bill = data;
	}
}

export default alt.createStore(BillStore, 'BillStore');
