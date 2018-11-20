import * as React from 'react';

import { StateConsumerType } from 'react-context-global-state';

import { State, StateConsumer } from './state';

const PersonStateConsumer = StateConsumer as StateConsumerType<State, 'person'>;

const Person = () => (
  <PersonStateConsumer name="person">
    {(value, update) => (
      <div>
        <div>
          First Name:
          <input
            value={value.firstName}
            onChange={(event) => {
              const firstName = event.target.value;
              update(p => ({ ...p, firstName }));
            }}
          />
        </div>
        <div>
          Last Name:
          <input
            value={value.lastName}
            onChange={(event) => {
              const lastName = event.target.value;
              update(p => ({ ...p, lastName }));
            }}
          />
        </div>
        <div>
          Age:
          <input
            value={value.age}
            onChange={(event) => {
              const age = Number(event.target.value) || 0;
              update(p => ({ ...p, age }));
            }}
          />
        </div>
      </div>
    )}
  </PersonStateConsumer>
);

export default Person;
