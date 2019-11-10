import React, { FunctionComponent } from 'react';

import { OtherComponent } from 'components/my-other-component';
import { noop } from 'utils';

export const Mixer: FunctionComponent = () => (
  <div>
    <h1 onClick={noop}>Mixer</h1>
    <OtherComponent />
  </div>
);
