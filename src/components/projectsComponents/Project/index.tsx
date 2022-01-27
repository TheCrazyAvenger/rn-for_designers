import React, {useRef} from 'react';
import {
  Animated,
  useWindowDimensions,
  ImageBackground,
  TouchableWithoutFeedback,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../../constants';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {toggleProject} from '../../../store/slices/homeSlice';
import {H5, H6} from '../../../ui/Typography';
import {ProjectProps} from '../../PropTypes';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';

export const Project: React.FC<ProjectProps> = ({
  image,
  title,
  author,
  text,
  canOpen,
}) => {
  const dispatch = useAppDispatch();

  const actionProject = useAppSelector(state => state.home.actionProject);

  const {width, height} = useWindowDimensions();
  const cardWidth = useRef(new Animated.Value(315)).current;
  const cardHeight = useRef(new Animated.Value(460)).current;
  const titleTop = useRef(new Animated.Value(0)).current;
  const closeButtomTop = useRef(new Animated.Value(-100)).current;

  const openCard = () => {
    if (canOpen) {
      dispatch(toggleProject(true));
      Animated.spring(cardWidth, {
        toValue: width,
        useNativeDriver: false,
      }).start();
      Animated.spring(cardHeight, {
        toValue: height,
        useNativeDriver: false,
      }).start();
      Animated.spring(titleTop, {
        toValue: 20,
        useNativeDriver: false,
      }).start();
      Animated.spring(closeButtomTop, {
        toValue: 40,
        useNativeDriver: false,
      }).start();

      StatusBar.setHidden(true);
    }
  };

  const closeCard = () => {
    dispatch(toggleProject(false));
    Animated.spring(cardWidth, {
      toValue: 315,
      useNativeDriver: false,
    }).start();
    Animated.spring(cardHeight, {
      toValue: 460,
      useNativeDriver: false,
    }).start();
    Animated.spring(titleTop, {
      toValue: 0,
      useNativeDriver: false,
    }).start();
    Animated.spring(closeButtomTop, {
      toValue: -100,
      useNativeDriver: false,
    }).start();

    StatusBar.setHidden(false);
  };

  return (
    <TouchableWithoutFeedback onPress={openCard}>
      <Animated.View
        style={{...styles.container, width: cardWidth, height: cardHeight}}>
        <ImageBackground source={image} style={styles.header}>
          <Animated.Text style={{...styles.title, paddingTop: titleTop}}>
            {title}
          </Animated.Text>
          <H6 style={styles.author}>{author}</H6>
        </ImageBackground>

        <View style={{height: actionProject ? 'auto' : 170}}>
          <H5 style={styles.text}>{text}</H5>
          <LinearGradient
            colors={[
              'rgba(255,255,255, 0)',
              'rgba(255,255,255, 0.7)',
              'rgba(255,255,255, 1)',
            ]}
            style={{
              opacity: actionProject ? 0 : 1,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
        </View>

        <Animated.View style={{...styles.closeButton, top: closeButtomTop}}>
          <TouchableOpacity onPress={closeCard}>
            <Icon name="close" size={25} color={colors.blue} />
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
