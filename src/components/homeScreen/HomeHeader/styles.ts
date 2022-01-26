import {StyleSheet} from 'react-native';
import {colors} from '../../../constants';

export const styles = StyleSheet.create({
  titleBar: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    marginTop: 70,
    justifyContent: 'space-between',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
    overflow: 'hidden',
  },
  title: {
    color: colors.lightGray,
    fontWeight: '500',
  },
  name: {
    fontWeight: 'bold',
  },
});
