import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 80,
    width: 360,
    flexDirection: 'row',
  },
  icon_container: {
    alignSelf: 'flex-start',
    width: 80,
    alignSelf: 'center',
  },
  detail_container: {
    alignSelf: 'center',
    width: 280,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    color: 'black',
    fontSize: 25,
    alignSelf: 'center',
  },
});
