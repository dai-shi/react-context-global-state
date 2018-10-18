import * as React from 'react';

import { stateItemConsumers } from './state';

const ErrorMessageConsumer = stateItemConsumers.errorMessage;

const ErrorMessage = () => (
  <ErrorMessageConsumer>
    {value => (
      <div style={{ color: 'red' }}>
        {value}
      </div>
    )}
  </ErrorMessageConsumer>
);

export default ErrorMessage;
