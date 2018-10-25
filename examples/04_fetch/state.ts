import { createGlobalState } from '../../src/index';

export const {
  StateProvider,
  stateItemConsumers,
  stateItemUpdaters,
} = createGlobalState({
  errorMessage: '',
  pageTitle: '',
});

export const setErrorMessage = (s: string) => {
  const update = stateItemUpdaters.errorMessage;
  update(s);
};

export const setPageTitle = (s: string) => {
  const update = stateItemUpdaters.pageTitle;
  update(s);
};
