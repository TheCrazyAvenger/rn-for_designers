import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Animated,
  useWindowDimensions,
} from 'react-native';
import {LoginForm} from '../../../forms';
import {H6} from '../../../ui/Typography';
import {styles} from './styles';
import {BlurView} from '@react-native-community/blur';
import {Loading, Success} from '../..';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {hideLogin, setAvatar, setName} from '../../../store/slices/userSlice';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useGetUserNameQuery} from '../../../api';

export const ModalLogin: React.FC = () => {
  const {data} = useGetUserNameQuery({});
  const dispatch = useAppDispatch();
  const showLogin = useAppSelector(state => state.user.showLogin);

  const {height} = useWindowDimensions();

  const top = useRef(new Animated.Value(height)).current;
  const scale = useRef(new Animated.Value(1.3)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const tapBackground = () => {
    Keyboard.dismiss();
    dispatch(hideLogin());
  };

  useEffect(() => {
    retrieveUser();
  }, []);

  useEffect(() => {
    if (showLogin) {
      Animated.timing(top, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }).start();
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: false,
      }).start();
      Animated.timing(translateY, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }).start();
    } else {
      setTimeout(() => {
        Animated.timing(top, {
          toValue: height,
          duration: 0,
          useNativeDriver: false,
        }).start();
        Animated.spring(scale, {
          toValue: 1.3,
          useNativeDriver: false,
        }).start();
      }, 500);
      Animated.timing(translateY, {
        toValue: 1000,
        duration: 500,
        useNativeDriver: false,
      }).start();
      dispatch(hideLogin());
    }
  }, [showLogin]);

  const saveUser = async () => {
    try {
      if (data) {
        const name = data.results[0].name.first;
        const avatar = data.results[0].picture.medium;

        await AsyncStorage.setItem('name', name);
        await AsyncStorage.setItem('avatar', avatar);

        dispatch(setName(name));
        dispatch(setAvatar(avatar));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const retrieveUser = async () => {
    try {
      const name = await AsyncStorage.getItem('name');
      const avatar = await AsyncStorage.getItem('avatar');
      if (name !== null || avatar !== null) {
        dispatch(setName(name!));
        dispatch(setAvatar(avatar));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = (values: {email: string; password: string}) => {
    const {email, password} = values;

    setIsLoading(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        setIsLoading(false);

        if (response) {
          setIsSuccessful(true);
          setIsActive(true);

          saveUser();

          setTimeout(() => {
            setIsActive(false);
          }, 1000);

          setTimeout(() => {
            setIsSuccessful(false);
            dispatch(hideLogin());
          }, 1350);
        }
      })
      .catch(error => {
        Alert.alert('Error', error.message);
        setIsLoading(false);
      });
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={tapBackground}>
        <Animated.View style={{...styles.container, top}}>
          {showLogin && (
            <BlurView
              style={{...styles.blur}}
              blurType="light"
              blurAmount={3}
            />
          )}
          <Animated.View
            style={{...styles.modal, transform: [{scale}, {translateY}]}}>
            <Image
              style={styles.logo}
              source={require('../../../assets/icon.png')}
            />
            <H6 style={styles.title}>Start learning. Access Pro Content.</H6>
            <LoginForm onSubmit={handleSubmit} />
          </Animated.View>
        </Animated.View>
      </TouchableWithoutFeedback>
      {isSuccessful && <Success isActive={isActive} />}
      {isLoading && <Loading isActive={isLoading} />}
    </>
  );
};
