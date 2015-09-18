import React from 'react';
import { Panel as BootstrapPanel } from 'react-bootstrap';
import cx from 'classnames';
import { formatCurrency } from '../../../utils/formatUtils';

import './Panel.scss';

export default class Panel extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const footer = (this.props.total) ? `Total: ${formatCurrency(this.props.total)}` : null;
    return (
      <BootstrapPanel className={cx('panel', this.props.className)} header={this.props.title} footer={footer} {...this.props}>
        {this.props.children}
      </BootstrapPanel>
    );
  }
}

Panel.propTypes = {
  title: React.PropTypes.string,
  total: React.PropTypes.number,
  className: React.PropTypes.string,
  children: React.PropTypes.node
};
