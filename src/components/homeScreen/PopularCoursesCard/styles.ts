import {StyleSheet} from 'react-native';
import {colors} from '../../../constants';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    height: 280,
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
    height: 200,
    overflow: 'hidden',
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
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
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  contentLogo: {
    width: 50,
    height: 44,
    marginRight: 8,
  },
  contentTitle: {
    fontWeight: '600',
    fontSize: 18,
  },
  contentText: {
    fontWeight: '600',
    textTransform: 'uppercase',
    color: colors.lightGray,
  },
});
