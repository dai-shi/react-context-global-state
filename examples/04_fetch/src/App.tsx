import * as React from 'react';

import { StateProvider } from './state';

import ErrorMessage from './ErrorMessage';
import PageInfo from './PageInfo';
import RandomButton from './RandomButton';

const App = () => (
  <StateProvider>
    <PageInfo />
    <RandomButton />
    <ErrorMessage />
  </StateProvider>
);

export default App;
