import {StyleSheet} from 'react-native';
import {colors} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 100,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  cover: {
    height: 142,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverTitle: {
    color: colors.white,
    fontWeight: '600',
  },
  coverText: {
    color: colors.lightGray,
    marginTop: 8,
  },
  closeButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 120,
    left: '50%',
    marginLeft: -22,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  menu: {
    padding: 50,
  },
});
