import {StyleSheet} from 'react-native';
import theme from '../../theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
  },
  banner: {
    height: 180,
    backgroundColor: theme.palette.darkGreen,
  },
  profile_image: {
    height: 200,
    borderRadius: 100,
    alignSelf: 'center',
    borderColor: 'white',
    borderWidth: 4,
    marginTop: 40,
    width: 200,
  },
  ad_soyad: {
    fontSize: 36,
    color: 'black',
    alignSelf: 'center',
    marginTop: 70,
    fontFamily: 'Poppins-Bold',
  },
  seperator: {
    marginVertical: 15,
    borderWidth: 1,
    width: 300,
    borderColor: '#e0e0e0',
    alignSelf: 'center',
  },
});
