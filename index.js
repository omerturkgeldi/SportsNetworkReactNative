/**
 * @format
 */

import { AppRegistry } from 'react-native';
import Router from './src/Router';
import LoggedInRouter from './src/LoggedInRouter';
import { name as appName } from './app.json';


var loggedIn = false;

var MyRouter = loggedIn ? LoggedInRouter : Router;


AppRegistry.registerComponent(appName, () => MyRouter);