import React from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import {CoursesList, HomeHeader, PopularCoursesList} from '../../components';
import {colors} from '../../constants';
import {styles} from './styles';

export const HomeScreen: React.FC = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={colors.background}
      />
      <HomeHeader />
      <CoursesList />
      <PopularCoursesList />
    </ScrollView>
  );
};
