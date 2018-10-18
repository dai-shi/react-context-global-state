import * as React from 'react';

import { countDown, countUp, stateItemConsumers } from './state';

const Counter1Consumer = stateItemConsumers.counter1;

const Counter = () => (
  <Counter1Consumer>
    {value => (
      <div>
        <span>
          Count:
          {value}
        </span>
        <button type="button" onClick={countUp}>+1</button>
        <button type="button" onClick={countDown}>-1</button>
      </div>
    )}
  </Counter1Consumer>
);

export default Counter;
