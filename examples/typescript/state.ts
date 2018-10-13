import { createGlobalState } from '../../src/index';

export const { StateProvider, stateItemConsumers } = createGlobalState({
  counter1: 0,
  person: {
    age: 0,
    firstName: '',
    lastName: '',
  },
});
