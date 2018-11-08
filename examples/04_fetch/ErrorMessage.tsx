import * as React from 'react';

import { StateConsumerType } from '../../src/index';

import { State, StateConsumer } from './state';

const ErrorMessageStateConsumer = StateConsumer as StateConsumerType<State, 'errorMessage'>;

const ErrorMessage = () => (
  <ErrorMessageStateConsumer name="errorMessage">
    {value => (
      <div style={{ color: 'red' }}>
        {value}
      </div>
    )}
  </ErrorMessageStateConsumer>
);

export default ErrorMessage;
