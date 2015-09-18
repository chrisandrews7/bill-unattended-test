import React from 'react';
import { Accordion } from 'react-bootstrap';
import cx from 'classnames';

import './PanelGroup.scss';

export default class PanelGroup extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Accordion className={cx('accordion', this.props.className)} {...this.props}>
        {this.props.children}
      </Accordion>
    );
  }
}

PanelGroup.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.node
};
