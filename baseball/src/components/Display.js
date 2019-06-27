import React from 'react';

const Display = props => {
  return (
    <div className="flex-row">
      {props.balls.current > 0 ? (
        props.balls.map(ball => (
          <div className="balls" key={ball.id}>
            Current Balls: {ball.current}
          </div>
        ))
      ) : (
        <p>0 Balls</p>
      )}

      {props.strikes.current > 0 ? (
        props.strikes.map(strike => (
          <div className="strikes" key={strike.id}>
            Current Strikes: {strike.current}
          </div>
        ))
      ) : (
        <p>0 Strikes</p>
      )}
    </div>
  );
};

export default Display;
