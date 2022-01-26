import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import {H5, H6} from '../../../ui/Typography';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {HeaderCard} from '../HeaderCard';
import {logos} from '../../../constants';

export const HomeHeader: React.FC = () => {
  return (
    <View>
      <View style={styles.titleBar}>
        <View style={styles.content}>
          <Image
            source={require('../../../assets/avatar.png')}
            style={styles.avatar}
          />
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
