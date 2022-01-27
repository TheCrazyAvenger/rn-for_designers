import LottieView from 'lottie-react-native';
import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import {SuccessProps} from '../../PropTypes';
import {styles} from './styles';

export const Loading: React.FC<SuccessProps> = ({isActive}) => {
  const top = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const animation: any = useRef(null);

  useEffect(() => {
    if (isActive) {
      Animated.timing(top, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }).start();

      Animated.timing(opacity, {
        toValue: 1,
        useNativeDriver: false,
      }).start();
      animation.current!.play();
    }
  }, [isActive]);

  return (
    <Animated.View style={{...styles.container, top, opacity}}>
      <LottieView
        source={require('../../../assets/lottie-loading-fluid.json')}
        autoPlay={false}
        loop={true}
        ref={animation}
      />
    </Animated.View>
  );
};
