import {StyleSheet} from 'react-native';
import {colors} from '../../../constants';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    height: 335,
    marginVertical: 10,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  imageCover: {
    width: '100%',
    height: 260,
    overflow: 'hidden',
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
  },
  logo: {
    width: 48,
    height: 48,
    position: 'absolute',
    top: 90,
    left: '50%',
    marginLeft: -24,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  cardSections: {
    marginLeft: 20,
    color: colors.white,
    textTransform: 'uppercase',
  },
  cardTitle: {
    margin: 20,
    marginTop: 5,
    color: colors.white,
    fontWeight: '600',
    width: 170,
  },
  content: {
    flexDirection: 'row',
    paddingTop: 8,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  contentLogo: {
    width: 44,
    height: 44,
    marginTop: 5,
    marginRight: 8,
  },
  contentTitle: {
    fontWeight: '600',
  },
  contentText: {
    fontWeight: '500',
    fontSize: 13,
    color: colors.lightGray,
  },
});
