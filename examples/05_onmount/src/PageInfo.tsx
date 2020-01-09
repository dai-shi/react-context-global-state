import * as React from 'react';

import { StateConsumerType } from 'react-context-global-state';

import { State, StateConsumer } from './state';

const PageTitleStateConsumer = StateConsumer as StateConsumerType<State, 'pageTitle'>;

const PageInfo = () => (
  <PageTitleStateConsumer name="pageTitle">
    {(value) => (
      <div>
        <h1>PageInfo</h1>
        {value}
      </div>
    )}
  </PageTitleStateConsumer>
);

export default PageInfo;
