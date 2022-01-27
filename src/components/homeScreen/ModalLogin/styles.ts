import {StyleSheet} from 'react-native';
import {colors} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blur: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  modal: {
    width: '80%',
    backgroundColor: colors.white,
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 25,
    paddingHorizontal: 20,
  },
  logo: {
    width: 90,
    height: 90,
  },
  title: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 13,
    width: 160,
    textAlign: 'center',
    color: colors.lightGray,
  },
});
