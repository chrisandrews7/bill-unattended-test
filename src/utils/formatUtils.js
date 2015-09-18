import moment from 'moment';
import numeral from 'numeral';

export const formatDate = (date) => {
	return moment(date).format('Do MMM YY');
};

export const formatCurrency = (number) => {
	return '£' + numeral(number).format('0,0.00');
};
