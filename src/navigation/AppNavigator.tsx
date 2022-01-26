import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Screens} from '../constants';
import {SectionScreen} from '../screens';
import {BottomTabs} from './BottomTabs';

const Stack = createStackNavigator();

export const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: 'modal',
        headerShown: false,
      }}>
      <Stack.Screen name={Screens.bottomTabs} component={BottomTabs} />
      <Stack.Screen name={Screens.sectionScreen} component={SectionScreen} />
    </Stack.Navigator>
  );
};
