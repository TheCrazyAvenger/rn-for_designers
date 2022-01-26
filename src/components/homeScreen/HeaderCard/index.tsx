import React from 'react';
import {Image, View} from 'react-native';
import {H6} from '../../../ui/Typography';
import {HeaderCardProps} from '../../PropTypes';
import {styles} from './styles';

export const HeaderCard: React.FC<HeaderCardProps> = ({image, title}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} resizeMode="contain" source={image} />

      <H6 style={styles.title}>{title}</H6>
    </View>
  );
};
