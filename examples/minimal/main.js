/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';

import { createGlobalState } from '../../src/index';

const initialState = {
  counter1: 0,
  text1: 'hello',
};
const { StateProvider, StateConsumer } = createGlobalState(initialState);

const Counter = () => (
  <StateConsumer name="counter1">
    {(value, update) => (
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

const TextBox = () => (
  <StateConsumer name="text1">
    {(value, update) => (
      <div>
        <span>
          Text:
          {value}
        </span>
        <input value={value} onChange={event => update(event.target.value)} />
      </div>
    )}
  </StateConsumer>
);

const App = () => (
  <StateProvider>
    <h1>Counter</h1>
    <Counter />
    <Counter />
    <h1>TextBox</h1>
    <TextBox />
    <TextBox />
  </StateProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));
