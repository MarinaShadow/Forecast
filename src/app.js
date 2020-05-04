import React from 'react';
import { Provider } from 'react-redux';
import { store } from './init/store';
import './init/moment';

import { Source } from './bus/forecast';


export const App = () => {
  return (
      <Provider store={ store }>
        <Source />
      </Provider>
  )
};
