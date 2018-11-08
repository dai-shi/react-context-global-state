import { createGlobalState } from '../../src/index';

const initialState = {
  counter1: 0,
  person: {
    age: 0,
    firstName: '',
    lastName: '',
  },
};

export type State = typeof initialState;

const { StateProvider, StateConsumer, setGlobalState } = createGlobalState(initialState);

export const countUp = () => {
  setGlobalState('counter1', v => v + 1);
};

export const countDown = () => {
  setGlobalState('counter1', v => v - 1);
};

export const setPersonFirstName = (firstName: string) => {
  setGlobalState('person', v => ({ ...v, firstName }));
};

export const setPersonLastName = (lastName: string) => {
  setGlobalState('person', v => ({ ...v, lastName }));
};

export const setPersonAge = (age: number) => {
  setGlobalState('person', v => ({ ...v, age }));
};

export { StateProvider, StateConsumer };
