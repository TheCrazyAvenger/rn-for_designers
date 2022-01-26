import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../constants';
import {H4, H5, H6} from '../../ui/Typography';
import {styles} from './styles';

export const SectionScreen: React.FC = () => {
  const route: any = useRoute();
  const navigation = useNavigation();

  const {title, image, caption, subtitle, logo} = route.params;

  const handleGoBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ImageBackground source={image} style={styles.header}>
        <View style={styles.headerLogo}>
          <Image resizeMode="contain" style={styles.logo} source={logo} />
          <H6 style={styles.logoText}>{subtitle}</H6>
        </View>
        <View style={styles.headerContent}>
          <H4 style={styles.headerTitle}>{title}</H4>
          <H6 style={styles.headerCaption}>{caption}</H6>
        </View>
        <TouchableOpacity onPress={handleGoBack} style={styles.closeButton}>
          <Icon name="close" size={25} color={colors.blue} />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
