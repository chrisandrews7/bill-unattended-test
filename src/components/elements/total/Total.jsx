import React from 'react';
import cx from 'classnames';
import { formatDate, formatCurrency } from '../../../utils/formatUtils';

import './Total.scss';

export default class Total extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={cx('total', this.props.className)}>
        <ul>
          <li className="grand-total">
            Total due {formatDate(this.props.due)}
            <span className="pull-right">{formatCurrency(this.props.total)}</span>
          </li>
          <li>
            Period:
            <span className="pull-right">{formatDate(this.props.period.from)} - {formatDate(this.props.period.to)}</span>
          </li>
          <li>
            Statement date:
            <span className="pull-right">{formatDate(this.props.generated)}</span>
          </li>
        </ul>
      </div>
    );
  }
}

Total.propTypes = {
  total: React.PropTypes.number.isRequired,
  due: React.PropTypes.string.isRequired,
  generated: React.PropTypes.string.isRequired,
  period: React.PropTypes.object.isRequired,
  className: React.PropTypes.string
};
