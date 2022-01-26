import React from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {H5, H6} from '../../../ui/Typography';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {HeaderCard} from '../HeaderCard';
import {logos} from '../../../constants';
import {toggleMenu} from '../../../store/slices/homeSlice';
import {useAppDispatch} from '../../../hooks';

export const HomeHeader: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleMenu = () => dispatch(toggleMenu());

  return (
    <View>
      <View style={styles.titleBar}>
        <View style={styles.content}>
          <TouchableOpacity onPress={handleMenu}>
            <Image
              source={require('../../../assets/avatar.png')}
              style={styles.avatar}
            />
          </TouchableOpacity>
          <View>
            <H6 style={styles.title}>Welcome back,</H6>
            <H5 style={styles.name}>Meng</H5>
          </View>
        </View>
        <Icon name="notifications" size={32} color="#4775f2" />
      </View>
      <ScrollView
        horizontal
        style={{paddingLeft: 10}}
        showsHorizontalScrollIndicator={false}>
        {logos.map((logo, i) => (
          <HeaderCard key={i} image={logo.image} title={logo.title} />
        ))}
      </ScrollView>
    </View>
  );
};
