import React, { FunctionComponent } from 'react';

import { noop } from 'utils';

export const OtherComponent: FunctionComponent = () => (
  <div onClick={noop}>Functional component</div>
);
