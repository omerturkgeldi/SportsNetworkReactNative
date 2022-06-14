import {StyleSheet} from 'react-native';
import theme from '../../theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
  },
  banner: {
    height: 200,
    backgroundColor: theme.palette.darkGreen,
  },
  profile_image: {
    height: 100,
    width: 100,
  },
});
