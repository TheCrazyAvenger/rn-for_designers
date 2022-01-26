import React from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import {
  CoursesList,
  HomeHeader,
  Menu,
  PopularCoursesList,
} from '../../components';
import {styles} from './styles';

export const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={'transparent'}
      />
      <Menu />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <CoursesList />
        <PopularCoursesList />
      </ScrollView>
    </View>
  );
};
