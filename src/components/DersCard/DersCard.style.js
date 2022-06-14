import {StyleSheet} from 'react-native';
import theme from '../../theme';

export default StyleSheet.create({
  container: {
    maxWidth: 250,
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
  adsoyad: {
    fontFamily: 'Montserrat-Bold',
    color: 'black',
    fontSize: 16,
    marginBottom: 5,
  },
  aciklama: {
    fontFamily: 'Montserrat-Regular',
    marginBottom: 5,
    fontSize: 12,
  },
  egitmen_tesis_container: {
    display: 'flex',
    flexDirection: 'column',
  },
  egitmen_container: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 3,
  },
  egitmen_label: {
    fontFamily: 'Montserrat-Bold',
    marginRight: 5,
    marginTop: 1,
    fontSize: 12,
  },
  egitmen: {
    color: theme.palette.darkGreen,
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
  },
  tesis_container: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 3,
  },
  tesis_label: {
    fontFamily: 'Montserrat-Bold',
    marginRight: 5,
    marginTop: 1,
    fontSize: 12,
  },
  tesis: {
    color: theme.palette.darkBlue,
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
  },
  ucret_tarih_container: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  saatlik_ucret: {
    fontFamily: 'Montserrat-BoldItalic',
    color: 'red',
  },
  ilan_tarihi: {
    fontFamily: 'Montserrat-Italic',
    color: 'red',
  },
});
