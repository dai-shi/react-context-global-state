import * as React from 'react';

import { StateProvider } from './state';

import Counter from './Counter';
import TextBox from './TextBox';

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

export default App;
