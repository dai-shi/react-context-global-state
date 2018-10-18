import * as React from 'react';

import { stateItemConsumers } from './state';

const PageTitleConsumer = stateItemConsumers.pageTitle;

const PageInfo = () => (
  <PageTitleConsumer>
    {value => (
      <div>
        <h1>PageInfo</h1>
        {value}
      </div>
    )}
  </PageTitleConsumer>
);

export default PageInfo;
