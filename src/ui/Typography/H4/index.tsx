import React from 'react';
import {Text} from 'react-native';
import {TextProps} from '../PropTypes';
import {styles} from './styles';

export const H4: React.FC<TextProps> = ({children, numberOfLines, style}) => {
  return (
    <Text numberOfLines={numberOfLines} style={{...styles.default, ...style}}>
      {children}
    </Text>
  );
};
