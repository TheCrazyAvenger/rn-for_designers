import React from 'react';
import {Image, ImageBackground, View} from 'react-native';
import {H4, H5, H6} from '../../../ui/Typography';
import {PopularCoursesCardProps} from '../../PropTypes';
import {styles} from './styles';

export const PopularCoursesCard: React.FC<PopularCoursesCardProps> = ({
  title,
  image,
  accountImage,
  sections,
  subtitle,
  taughtBy,
  logo,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageCover}>
        <ImageBackground source={image} style={styles.cardImage}>
          <Image resizeMode="contain" source={logo} style={styles.logo} />
          <H5 style={styles.cardSections}>{sections} Sections</H5>
          <H4 style={styles.cardTitle}>{title}</H4>
        </ImageBackground>
      </View>
      <View style={styles.content}>
        <Image
          resizeMode="contain"
          style={styles.contentLogo}
          source={accountImage}
        />

        <View style={{width: '80%'}}>
          <H6 numberOfLines={2} style={styles.contentTitle}>
            {subtitle}
          </H6>
          <H6 numberOfLines={1} style={styles.contentText}>
            Taught by {taughtBy}
          </H6>
        </View>
      </View>
    </View>
  );
};
