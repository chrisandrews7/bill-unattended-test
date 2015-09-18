import React from 'react';

import './Sidebar.scss';

export default class Sidebar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bill-sidebar">
        <h2>Your payments</h2>
        <ul>
          <li>Make a Payment</li>
          <li>Change payment due date</li>
        </ul>
        <h2>Future costs</h2>
        <ul>
          <li>Upcoming subscription costs</li>
          <li>Charges since your latest bill</li>
        </ul>
        <h2>Settings</h2>
        <ul>
          <li>Set call charge alerts</li>
          <li>Paperless bill settings</li>
        </ul>
      </div>
    );
  }

}
