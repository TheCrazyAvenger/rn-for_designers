import React, {useEffect, useRef} from 'react';
import {
  Animated,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors, menuItems} from '../../../constants';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {toggleMenu} from '../../../store/slices/homeSlice';
import {setAvatar, setName} from '../../../store/slices/userSlice';
import {H4, Paragraph} from '../../../ui/Typography';
import {MenuItem} from '../MenuItem';
import {styles} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const screenHeight = Dimensions.get('window').height;

export const Menu: React.FC = () => {
  const actionMenu = useAppSelector(state => state.home.actionMenu);
  const dispatch = useAppDispatch();

  const top = useRef(new Animated.Value(screenHeight)).current;

  const handleMenu = () => dispatch(toggleMenu());

  const handleMenuItem = async (index: number) => {
    try {
      if (index === 3) {
        dispatch(toggleMenu());
        dispatch(setName(''));
        dispatch(setAvatar(null));
        await AsyncStorage.removeItem('name');
        await AsyncStorage.removeItem('avatar');
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (actionMenu) {
      Animated.spring(top, {
        useNativeDriver: false,
        toValue: 60,
      }).start();
    } else {
      Animated.spring(top, {
        useNativeDriver: false,
        toValue: screenHeight,
      }).start();
    }
  }, [actionMenu]);

  return (
    <Animated.View style={{...styles.container, top}}>
      <ImageBackground
        source={require('../../../assets/card1.jpg')}
        style={styles.cover}
        borderRadius={10}
        borderBottomLeftRadius={30}
        borderBottomRightRadius={30}>
        <H4 style={styles.coverTitle}>Meng To</H4>
        <Paragraph style={styles.coverText}>Designer at Design+Code</Paragraph>
      </ImageBackground>
      <TouchableOpacity onPress={handleMenu} style={styles.closeButton}>
        <Icon name="close" size={30} color={colors.blue} />
      </TouchableOpacity>
      <View style={styles.menu}>
        {menuItems.map((item, i) => (
          <TouchableOpacity
            key={i}
            activeOpacity={0.7}
            onPress={() => handleMenuItem(i)}>
            <MenuItem icon={item.icon} title={item.title} text={item.text} />
          </TouchableOpacity>
        ))}
      </View>
    </Animated.View>
  );
};
