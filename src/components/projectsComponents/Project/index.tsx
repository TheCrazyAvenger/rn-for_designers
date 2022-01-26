import React from 'react';
import {Image, ImageBackground, View} from 'react-native';
import {H4, H5, H6} from '../../../ui/Typography';
import {ProjectProps} from '../../PropTypes';
import {styles} from './styles';

export const Project: React.FC<ProjectProps> = ({
  image,
  title,
  author,
  text,
}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.header}>
        <H4 style={styles.title}>{title}</H4>
        <H6 style={styles.author}>{author}</H6>
      </ImageBackground>
      <H5 style={styles.text}>{text}</H5>
    </View>
  );
};
