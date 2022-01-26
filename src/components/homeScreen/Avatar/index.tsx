import React, {useEffect} from 'react';
import {Image} from 'react-native';
import {useGetUserNameQuery} from '../../../api';
import {useAppDispatch} from '../../../hooks';
import {setName} from '../../../store/slices/userSlice';
import {styles} from './styles';

export const Avatar: React.FC = () => {
  const {data} = useGetUserNameQuery({});
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setName(data.results[0].name.first));
    }
  }, [data]);

  return (
    <Image
      style={styles.image}
      resizeMode="contain"
      source={
        data
          ? {
              uri: data.results[0].picture.medium,
            }
          : require('../../../assets/avatar.png')
      }
    />
  );
};
