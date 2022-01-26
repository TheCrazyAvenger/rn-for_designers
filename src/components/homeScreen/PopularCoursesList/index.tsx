import React from 'react';
import {View} from 'react-native';
import {H6} from '../../../ui/Typography';
import {styles} from './styles';
import {courses} from '../../../constants';
import {PopularCoursesCard} from '../PopularCoursesCard';

export const PopularCoursesList: React.FC = () => {
  return (
    <View style={styles.container}>
      <H6 style={styles.title}>Popular Courses</H6>

      {courses.map((course, i) => (
        <PopularCoursesCard
          title={course.title}
          sections={course.sections}
          accountImage={course.accountImage}
          image={course.image}
          subtitle={course.subtitle}
          taughtBy={course.taughtBy}
          logo={course.logo}
          key={i}
        />
      ))}
    </View>
  );
};
