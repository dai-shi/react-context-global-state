import * as React from 'react';

import {
  setPersonAge,
  setPersonFirstName,
  setPersonLastName,
  stateItemConsumers,
} from './state';

const PersonConsumer = stateItemConsumers.person;

const Person = () => (
  <PersonConsumer>
    {({ firstName, lastName, age }) => (
      <div>
        <div>
          First Name:
          <input
            value={firstName}
            onChange={event => setPersonFirstName(event.target.value)}
          />
        </div>
        <div>
          Last Name:
          <input
            value={lastName}
            onChange={event => setPersonLastName(event.target.value)}
          />
        </div>
        <div>
          Age:
          <input
            value={age}
            onChange={event => setPersonAge(Number(event.target.value) || 0)}
          />
        </div>
      </div>
    )}
  </PersonConsumer>
);

export default Person;
