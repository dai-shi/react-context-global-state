import * as React from 'react';

import { StateConsumerType } from 'react-context-global-state';

import {
  setPersonAge,
  setPersonFirstName,
  setPersonLastName,
  State,
  StateConsumer,
} from './state';

const PersonStateConsumer = StateConsumer as StateConsumerType<State, 'person'>;

const Person = () => (
  <PersonStateConsumer name="person">
    {({ firstName, lastName, age }) => (
      <div>
        <div>
          First Name:
          <input
            value={firstName}
            onChange={(event) => setPersonFirstName(event.target.value)}
          />
        </div>
        <div>
          Last Name:
          <input
            value={lastName}
            onChange={(event) => setPersonLastName(event.target.value)}
          />
        </div>
        <div>
          Age:
          <input
            value={age}
            onChange={(event) => setPersonAge(Number(event.target.value) || 0)}
          />
        </div>
      </div>
    )}
  </PersonStateConsumer>
);

export default Person;
