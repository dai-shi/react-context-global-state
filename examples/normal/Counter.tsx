import * as React from 'react';

import { StateConsumer } from './main';

const Counter = () => (
  <StateConsumer name="counter1">
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
  </StateConsumer>
);

export default Counter;
