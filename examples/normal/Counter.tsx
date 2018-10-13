import * as React from 'react';

import { stateItemConsumers } from './state';

const Counter1Consumer = stateItemConsumers.counter1;

const Counter = () => (
  <Counter1Consumer>
    {(value, update) => (
      <div>
        <span>
          Count:
          {value}
        </span>
        <button type="button" onClick={() => update(v => v + 1)}>+1</button>
        <button type="button" onClick={() => update(v => v - 1)}>-1</button>
      </div>
    )}
  </Counter1Consumer>
);

export default Counter;
