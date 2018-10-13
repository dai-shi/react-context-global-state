import * as React from 'react';

import { StateConsumer } from './main';

const TextBox = () => (
  <StateConsumer name="text1">
    {(value: string, update: (v: string) => void) => (
      <div>
        <span>
          Text:
          {value}
        </span>
        <input value={value} onChange={event => update(event.target.value)} />
      </div>
    )}
  </StateConsumer>
);

export default TextBox;
