import React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {H5, H6} from '../../../ui/Typography';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {HeaderCard} from '../HeaderCard';
import {logos} from '../../../constants';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {Avatar} from '../Avatar';
import {openLogin} from '../../../store/slices/userSlice';
import {toggleMenu} from '../../../store/slices/homeSlice';

export const HomeHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  const name = useAppSelector(state => state.user.name);

  const loginHandler = () =>
    name ? dispatch(toggleMenu()) : dispatch(openLogin());

  return (
    <View>
      <View style={styles.titleBar}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.avatar} onPress={loginHandler}>
            <Avatar />
          </TouchableOpacity>
          <View style={{maxWidth: '80%'}}>
            <H6 style={styles.title}>Welcome back,</H6>
            <H5 numberOfLines={1} style={styles.name}>
              {name ? name : 'Stranger'}
            </H5>
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
