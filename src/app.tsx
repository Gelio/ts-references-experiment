import React, { FunctionComponent, Reducer, useReducer } from 'react';

import { Mixer } from 'features/mixer';
import { Pan } from 'features/pan';
import { Shaker } from 'features/shaker';

const components = [Mixer, Shaker, Pan];

const componentsReducer: Reducer<number, undefined> = prevState =>
  (prevState + 1) % components.length;

export const App: FunctionComponent = () => {
  const [componentIndex, switchComponent] = useReducer(componentsReducer, 0);
  const Component = components[componentIndex];

  return (
    <div>
      <h1>App</h1>
      <p>
        <button onClick={() => switchComponent(undefined)}>
          Switch component
        </button>
      </p>

      <Component />
    </div>
  );
};
