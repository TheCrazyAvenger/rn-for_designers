import React from 'react';
import {Provider} from 'react-redux';
import {HomeScreen} from './screens';
import {store} from './store/store';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};
