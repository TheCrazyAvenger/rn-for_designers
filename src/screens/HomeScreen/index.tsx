import React, {useEffect, useRef} from 'react';
import {Animated, StatusBar, View} from 'react-native';
import {
  CoursesList,
  HomeHeader,
  Menu,
  PopularCoursesList,
} from '../../components';
import {useAppSelector} from '../../hooks';
import {styles} from './styles';

export const HomeScreen: React.FC = () => {
  const actionMenu = useAppSelector(state => state.home.actionMenu);
  const scale = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (actionMenu) {
      Animated.spring(scale, {
        useNativeDriver: false,
        toValue: 0.9,
      }).start();
      Animated.spring(opacity, {
        useNativeDriver: false,
        toValue: 0.5,
      }).start();
      StatusBar.setBarStyle('light-content');
    } else {
      Animated.spring(scale, {
        useNativeDriver: false,
        toValue: 1,
      }).start();
      Animated.spring(opacity, {
        useNativeDriver: false,
        toValue: 1,
      }).start();
      StatusBar.setBarStyle('dark-content');
    }
  }, [actionMenu]);

  return (
    <View style={styles.mainContainer}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={'transparent'}
      />
      <Menu />
      <Animated.ScrollView
        style={{...styles.container, transform: [{scale}], opacity}}
        showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <CoursesList />
        <PopularCoursesList />
      </Animated.ScrollView>
    </View>
  );
};
