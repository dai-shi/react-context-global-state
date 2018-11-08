import { createGlobalState } from '../../src/index';

const initialState = {
  errorMessage: '',
  pageTitle: '',
};

export type State = typeof initialState;

const {
  StateProvider,
  StateConsumer,
  setGlobalState,
} = createGlobalState(initialState);

export const setErrorMessage = (s: string) => {
  setGlobalState('errorMessage', s);
};

export const setPageTitle = (s: string) => {
  setGlobalState('pageTitle', s);
};

export { StateProvider, StateConsumer };
