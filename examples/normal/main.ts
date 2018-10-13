import * as React from 'react';
import { render } from 'react-dom';

import { createGlobalState } from '../../src/index';

import App from './App';

export const { StateProvider, StateConsumer } = createGlobalState({
  counter1: 0,
  text1: 'hello',
});

render(React.createElement(App), document.getElementById('app'));
