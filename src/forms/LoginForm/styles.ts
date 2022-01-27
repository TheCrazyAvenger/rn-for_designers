import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

export const styles = StyleSheet.create({
  container: {width: '100%'},
  textInput: {
    width: '100%',
    marginTop: 20,
    paddingLeft: 44,
    borderColor: '#dbdfea',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 17,
    color: '#3c4560',
  },
  leftIcon: {
    position: 'absolute',
    left: 12,
    top: 32,
  },
  button: {
    backgroundColor: '#5263ff',
    width: '100%',
    marginTop: 20,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  buttonText: {
    color: colors.white,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
});
