import { createGlobalState } from '../../src/index';

export const {
  StateProvider,
  stateItemConsumers,
  stateItemUpdaters,
} = createGlobalState({
  counter1: 0,
  person: {
    age: 0,
    firstName: '',
    lastName: '',
  },
});

export const countUp = () => {
  const update = stateItemUpdaters.counter1;
  update(v => v + 1);
};

export const countDown = () => {
  const update = stateItemUpdaters.counter1;
  update(v => v - 1);
};

export const setPersonFirstName = (firstName: string) => {
  const update = stateItemUpdaters.person;
  update(v => ({ ...v, firstName }));
};

export const setPersonLastName = (lastName: string) => {
  const update = stateItemUpdaters.person;
  update(v => ({ ...v, lastName }));
};

export const setPersonAge = (age: number) => {
  const update = stateItemUpdaters.person;
  update(v => ({ ...v, age }));
};
