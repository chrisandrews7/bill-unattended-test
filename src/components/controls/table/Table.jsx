import React from 'react';
import { Table as BootstrapTable } from 'react-bootstrap';
import cx from 'classnames';
import _ from 'lodash';
import { formatCurrency } from '../../../utils/formatUtils';

import './Table.scss';

export default class Table extends React.Component {

  constructor(props) {
    super(props);
  }

  /**
   * Render rows in a table
   * @param  array rows Array of data to be processed
   * @return array      Formatted table rows
   */
  renderRows(rows) {
    return _.map(this.props.rows, (row, index) => {
      const rowMarkup = _.map(row, (item, key) => {
        return <td key={key}>{(key === 'cost') ? formatCurrency(item) : item}</td>;
      });
      return <tr key={index}>{rowMarkup}</tr>;
    });
  }

  render() {
    return (
      <div className={cx('table', this.props.className)}>
        <BootstrapTable responsive>
          <thead>
            <tr>
              {_.map(this.props.headings, (heading, index) => {
                return <th key={index}>{heading}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {this.renderRows(this.props.rows)}
          </tbody>
        </BootstrapTable>
      </div>
    );
  }
}

Table.propTypes = {
  headings: React.PropTypes.array.isRequired,
  className: React.PropTypes.string,
  rows: React.PropTypes.array.isRequired
};
