import {StyleSheet} from 'react-native';
import {colors} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    maxWidth: '80%',
    height: 460,
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  header: {
    height: 290,
    padding: 20,
    justifyContent: 'space-between',
  },
  image: {},
  title: {
    width: 300,
    fontWeight: 'bold',
    color: colors.white,
  },
  author: {
    color: colors.white,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  text: {
    fontSize: 17,
    margin: 20,
    lineHeight: 24,
  },
});
