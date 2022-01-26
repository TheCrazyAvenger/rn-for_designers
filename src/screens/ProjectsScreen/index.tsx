import React, {useRef} from 'react';
import {Project} from '../../components';
import {styles} from './styles';
import {Animated, PanResponder, View} from 'react-native';

export const ProjectsScreen: React.FC = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const scale = useRef(new Animated.Value(0.9)).current;
  const translateY = useRef(new Animated.Value(44)).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      Animated.spring(scale, {toValue: 1, useNativeDriver: false}).start();
      Animated.spring(translateY, {toValue: 0, useNativeDriver: false}).start();
    },
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x,
          dy: pan.y,
        },
      ],
      {useNativeDriver: false},
    ),
    onPanResponderRelease: () => {
      //@ts-ignore
      const positionY = pan.y.__getValue();

      if (Math.abs(positionY) > 200) {
        Animated.timing(pan, {
          //@ts-ignore
          toValue: {x: pan.x.__getValue(), y: 1000},
          useNativeDriver: false,
        }).start();
      } else {
        Animated.spring(pan, {
          toValue: {x: 0, y: 0},
          useNativeDriver: false,
        }).start();
        Animated.spring(scale, {
          toValue: 0.9,
          useNativeDriver: false,
        }).start();
        Animated.spring(translateY, {
          toValue: 44,
          useNativeDriver: false,
        }).start();
      }
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [{translateX: pan.x}, {translateY: pan.y}],
        }}
        {...panResponder.panHandlers}>
        <Project
          title="Price tag"
          image={require('../../assets/background5.jpg')}
          author="Liu Yi"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto ipsam, nesciunt totam minima error sequi officiis rem necessitatibus, suscipit itaque exercitationem facere nisi similique beatae sit neque perferendis porro numquam!"
        />
      </Animated.View>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          transform: [{scale}, {translateY}],
        }}>
        <Project
          title="Price tag"
          image={require('../../assets/background5.jpg')}
          author="Liu Yi"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto ipsam, nesciunt totam minima error sequi officiis rem necessitatibus, suscipit itaque exercitationem facere nisi similique beatae sit neque perferendis porro numquam!"
        />
      </Animated.View>
    </View>
  );
};
