import React from 'react';
import {ScrollView, View} from 'react-native';
import {H6} from '../../../ui/Typography';
import {CoursesCard} from '../..';
import {styles} from './styles';
import {cards} from '../../../constants';

export const CoursesList: React.FC = () => {
  return (
    <View style={styles.container}>
      <H6 style={styles.title}>Continue Learning</H6>
      <ScrollView
        style={{paddingLeft: 10}}
        showsHorizontalScrollIndicator={false}
        horizontal>
        {cards.map((card, i) => (
          <CoursesCard
            title={card.title}
            image={card.image}
            subtitle={card.subtitle}
            caption={card.caption}
            logo={card.logo}
            key={i}
          />
        ))}
      </ScrollView>
    </View>
  );
};
