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
import {H4, Paragraph} from '../../../ui/Typography';
import {MenuItem} from '../MenuItem';
import {styles} from './styles';

const screenHeight = Dimensions.get('window').height;

export const Menu: React.FC = () => {
  const top = useRef(new Animated.Value(screenHeight)).current;

  useEffect(() => {
    Animated.spring(top, {
      useNativeDriver: false,
      toValue: 0,
    }).start();
  }, []);

  const toggleMenu = () => {
    Animated.spring(top, {
      useNativeDriver: false,
      toValue: screenHeight,
    }).start();
  };

  return (
    <Animated.View style={{...styles.container, top}}>
      <ImageBackground
        source={require('../../../assets/card1.jpg')}
        style={styles.cover}
        borderBottomLeftRadius={30}
        borderBottomRightRadius={30}>
        <H4 style={styles.coverTitle}>Meng To</H4>
        <Paragraph style={styles.coverText}>Designer at Design+Code</Paragraph>
      </ImageBackground>
      <TouchableOpacity onPress={toggleMenu} style={styles.closeButton}>
        <Icon name="close" size={30} color={colors.blue} />
      </TouchableOpacity>
      <View style={styles.menu}>
        {menuItems.map((item, i) => (
          <MenuItem
            icon={item.icon}
            title={item.title}
            text={item.text}
            key={i}
          />
        ))}
      </View>
    </Animated.View>
  );
};
