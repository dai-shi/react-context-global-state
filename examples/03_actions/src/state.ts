import { createGlobalState } from 'react-context-global-state';

const initialState = {
  count1: 0,
  person: {
    age: 0,
    firstName: '',
    lastName: '',
  },
};

export type State = typeof initialState;

const { StateProvider, StateConsumer, setGlobalState } = createGlobalState(initialState);

export const countUp = () => {
  setGlobalState('count1', v => v + 1);
};

export const countDown = () => {
  setGlobalState('count1', v => v - 1);
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
