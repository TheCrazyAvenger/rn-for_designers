import React from 'react';
import {ScrollView, View} from 'react-native';
import {H6} from '../../../ui/Typography';
import {CoursesCard} from '../..';
import {styles} from './styles';
import {useQuery} from '@apollo/client';
import {CARDS_QUERY} from '../../../graphql';

export const CoursesList: React.FC = () => {
  const {data, loading, error} = useQuery(CARDS_QUERY);

  // console.log(data.cardsCollection.items[0].logo.url);

  return (
    <View style={styles.container}>
      <H6 style={styles.title}>Continue Learning</H6>
      <ScrollView
        style={{paddingLeft: 10}}
        showsHorizontalScrollIndicator={false}
        horizontal>
        {loading ? (
          <H6 style={styles.queryMessage}>Loading ...</H6>
        ) : error ? (
          <H6 style={styles.queryMessage}>Error ...</H6>
        ) : (
          data.cardsCollection.items.map((card: any, i: number) => (
            <CoursesCard
              title={card.title}
              image={card.image.url}
              subtitle={card.subtitle}
              caption={card.caption}
              logo={card.logo.url}
              content={card.content}
              key={i}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
};
