import * as React from 'react';

import { StateConsumerType } from 'react-context-global-state';

import {
  countDown,
  countUp,
  State,
  StateConsumer,
} from './state';

const Counter1StateConsumer = StateConsumer as StateConsumerType<State, 'counter1'>;

const Counter = () => (
  <Counter1StateConsumer name="counter1">
    {value => (
      <div>
        <span>Count:{value}</span>
        <button type="button" onClick={countUp}>+1</button>
        <button type="button" onClick={countDown}>-1</button>
      </div>
    )}
  </Counter1StateConsumer>
);

export default Counter;
