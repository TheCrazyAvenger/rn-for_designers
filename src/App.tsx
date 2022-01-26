import React from 'react';
import {Provider} from 'react-redux';
import {AppNavigator} from './navigation/AppNavigator';
import {store} from './store/store';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

export const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </NavigationContainer>
  );
};
