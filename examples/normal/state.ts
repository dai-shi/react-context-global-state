import { createGlobalState } from '../../src/index';

export const { StateProvider, stateItemConsumers } = createGlobalState({
  counter1: 0,
  text1: 'hello',
});
