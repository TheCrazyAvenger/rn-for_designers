import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors, Screens} from '../../constants';
import {CoursesScreen, HomeScreen, ProjectsScreen} from '../../screens';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const BottomTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.activeColor,
        tabBarInactiveTintColor: colors.inactiveColor,
        tabBarStyle: {
          height: 50,
          paddingBottom: 5,
        },
      }}>
      <Tab.Screen
        options={{
          title: 'Home',
          tabBarIcon: ({size, color}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
        name={Screens.homeScreen}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          title: 'Course',
          tabBarIcon: ({size, color}) => (
            <Icon name="albums" size={size} color={color} />
          ),
        }}
        name={Screens.coursesScreen}
        component={CoursesScreen}
      />
      <Tab.Screen
        options={{
          title: 'Projects',
          tabBarIcon: ({size, color}) => (
            <Icon name="folder" size={size} color={color} />
          ),
        }}
        name={Screens.projectsScreen}
        component={ProjectsScreen}
      />
    </Tab.Navigator>
  );
};
