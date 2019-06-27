import React, { useState } from 'react';

import Dashboard from './components/Dashboard';
// import Display from './components/Display';

const App = () => {
  const ballData = [{ id: 'balls', current: '0' }];
  const strikeData = [{ id: 'strike', current: '0' }];

  const [balls, setBalls] = useState(ballData);
  const [strikes, setStrikes] = useState(strikeData);


  return (
    <div className="App">
      <h1>Fakey Ball Game</h1>
      <div className="container">
        <div className="flex-row">
          <div className="playerStats">
            <Dashboard balls={balls} strikes={strikes} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
