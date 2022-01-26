import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../../constants';
import {H4, Paragraph} from '../../../ui/Typography';
import {MenuItemProps} from '../../PropTypes';
import {styles} from './styles';

export const MenuItem: React.FC<MenuItemProps> = ({icon, title, text}) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} size={24} color={colors.blue} />
      <View style={styles.content}>
        <H4 style={styles.title}>{title}</H4>
        <Paragraph style={styles.text}>{text}</Paragraph>
      </View>
    </View>
  );
};
