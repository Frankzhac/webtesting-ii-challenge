import React from 'react';
import Display from './Display';

const Dashboard = props => (
  <div>
    <h1>Player Dashboard</h1>
    <div className="container">
      <Display balls={props.balls} strikes={props.strikes} />
      <div className="flex-row">
        <button>Next at Bat</button>
      </div>
    </div>
  </div>
);

export default Dashboard;
