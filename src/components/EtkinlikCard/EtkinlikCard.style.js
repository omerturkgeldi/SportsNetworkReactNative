import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    maxWidth: 300,
    padding: 10,
    fontFamily: 'Montserrat-Black',
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    borderRadius: 10,
    width: 80,
    height: 80,
    margin: 10,
  },
  card_detail: {
    margin: 10,
    display: 'flex',
    flexDirection: 'column',
  },
  info: {
    fontFamily: 'Montserrat-Bold',
    color: 'black',
    fontSize: 24,
  },
  baslik: {
    fontFamily: 'Montserrat-BoldItalic',
    color: 'black',
    marginBottom: 5,
  },
  seperator: {
    marginVertical: 15,
    borderWidth: 1,
    width: 300,
    borderColor: '#e0e0e0',
    alignSelf: 'center',
  },
  aciklama: {},
});
