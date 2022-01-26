import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 375,
    padding: 20,
    paddingTop: 40,
  },
  headerLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 24,
    height: 24,
  },
  logoText: {
    color: colors.white,
    textTransform: 'uppercase',
    marginLeft: 5,
    fontWeight: '600',
  },
  headerContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  headerTitle: {
    width: 170,
    color: colors.white,
    fontWeight: 'bold',
  },
  headerCaption: {
    color: colors.white,
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 22,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    right: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  content: {
    padding: 20,
  },
});
