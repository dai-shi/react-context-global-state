import * as React from 'react';
import { composeWithOnMount } from 'react-compose-onmount';

import { setPageTitle, StateProvider } from './state';

import ErrorMessage from './ErrorMessage';
import PageInfo from './PageInfo';
import RandomButton from './RandomButton';

const initPageInfo = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts/1';
  const response = await fetch(url);
  const body = await response.json();
  setPageTitle(body.title);
};

const PageInfoWithInit = composeWithOnMount(initPageInfo)(PageInfo);

const App = () => (
  <StateProvider>
    <PageInfoWithInit />
    <RandomButton />
    <ErrorMessage />
  </StateProvider>
);

export default App;
