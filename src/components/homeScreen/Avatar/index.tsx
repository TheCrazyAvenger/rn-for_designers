import React from 'react';
import {Image} from 'react-native';
import {useAppSelector} from '../../../hooks';
import {styles} from './styles';

export const Avatar: React.FC = () => {
  const avatar = useAppSelector(state => state.user.avatar);

  return (
    <Image
      style={styles.image}
      resizeMode="contain"
      source={
        avatar
          ? {
              uri: avatar,
            }
          : require('../../../assets/avatar.png')
      }
    />
  );
};
