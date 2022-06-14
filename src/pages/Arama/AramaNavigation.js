import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Rakipler from '../../pages/Rakipler/Rakipler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Arama from './Arama';
import Dersler from '../Dersler/Dersler';
import Tesisler from '../Tesisler/Tesisler';
import Etkinlikler from '../Etkinlikler/Etkinlikler';
import Gruplar from '../Gruplar/Gruplar';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

const AramaNavigation = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        {/* <Stack.Screen name="MainPage" component={Home} options={{
                    headerShown: false,
                }} /> */}
        <Stack.Screen
          name="AramaPage"
          component={Arama}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="DerslerPage"
          component={Dersler}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="TesislerPage"
          component={Tesisler}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="EtkinliklerPage"
          component={Etkinlikler}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="RakiplerPage"
          component={Rakipler}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="GruplarPage"
          component={Gruplar}
          options={{
            headerShown: false,
          }}
        />

        {/* <Stack.Screen name='DetailPage' component={Detail} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AramaNavigation;
