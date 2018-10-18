import * as React from 'react';

import { StateProvider } from './state';

import Counter from './Counter';
import Person from './Person';

const App = () => (
  <StateProvider>
    <h1>Counter</h1>
    <Counter />
    <Counter />
    <h1>Person</h1>
    <Person />
    <Person />
  </StateProvider>
);

export default App;
