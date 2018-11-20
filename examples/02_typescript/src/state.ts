import { createGlobalState } from 'react-context-global-state';

const initialState = {
  counter1: 0,
  person: {
    age: 0,
    firstName: '',
    lastName: '',
  },
};

export type State = typeof initialState;

export const { StateProvider, StateConsumer } = createGlobalState(initialState);
