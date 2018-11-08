import * as React from 'react';

import { composeWithState } from 'react-compose-state';

import { setErrorMessage, setPageTitle } from './state';

const fetchPageTitle = async (setLoading: SetLoading) => {
  setLoading(true);
  try {
    const id = Math.floor(100 * Math.random());
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const response = await fetch(url);
    const body = await response.json();
    setPageTitle(body.title);
  } catch (e) {
    setErrorMessage(`Error: ${e}`);
  }
  setLoading(false);
};

type SetLoading = (x: boolean) => void;
type Props = {
  loading: boolean,
  setLoading: SetLoading,
};

const RandomButton: React.SFC<Props> = ({ loading, setLoading }) => (
  <div>
    {loading ? 'Loading...' : (
      <button type="button" onClick={() => fetchPageTitle(setLoading)}>
        Random
      </button>
    )}
  </div>
);

const RandomButtonWithState = composeWithState({ loading: false })(RandomButton);

export default RandomButtonWithState;
