import * as React from 'react';

import { StateConsumerType } from 'react-context-global-state';

import { State, StateConsumer } from './state';

const Counter1StateConsumer = StateConsumer as StateConsumerType<State, 'counter1'>;

const Counter = () => (
  <Counter1StateConsumer name="counter1">
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
  </Counter1StateConsumer>
);

export default Counter;
