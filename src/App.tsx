import React from 'react';
import {Provider} from 'react-redux';
import {AppNavigator} from './navigation/AppNavigator';
import {store} from './store/store';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphql.contentful.com/content/v1/spaces/quum10sp2r8m',
  cache: new InMemoryCache(),
  credentials: 'same-origin',
  headers: {
    Authorization: `Bearer nRyzWPqGBwN8EazphAmTBBXQDNCIXqs6-n12yxLo7UA`,
  },
});

export const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </NavigationContainer>
    </ApolloProvider>
  );
};
