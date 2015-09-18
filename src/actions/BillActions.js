import alt from 'control';
import axios from 'axios';
import config from 'config';

class BillActions {

	requestBill() {
		axios({
			url: config.billUrl
		})
		.then((response) => {
			this.dispatch(response.data);
		});
	}
}

export default alt.createActions(BillActions);
