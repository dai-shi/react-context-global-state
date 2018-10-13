import * as React from 'react';

import { stateItemConsumers } from './state';

const Text1Consumer = stateItemConsumers.text1;

const TextBox = () => (
  <Text1Consumer>
    {(value: string, update: (v: string) => void) => (
      <div>
        <span>
          Text:
          {value}
        </span>
        <input value={value} onChange={event => update(event.target.value)} />
      </div>
    )}
  </Text1Consumer>
);

export default TextBox;
