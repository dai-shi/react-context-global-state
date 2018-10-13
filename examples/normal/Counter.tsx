import * as React from 'react';

import { stateItemConsumers } from './state';

const Counter1Consumer = stateItemConsumers.counter1;

const Counter = () => (
  <Counter1Consumer>
    {(value: number, update: (v: number) => void) => (
      <div>
        <span>
          Count:
          {value}
        </span>
        <button type="button" onClick={() => update(value + 1)}>+1</button>
        <button type="button" onClick={() => update(value - 1)}>-1</button>
      </div>
    )}
  </Counter1Consumer>
);

export default Counter;
