import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Message from '../pages/Message/Message';
import Arama from '../pages/Arama/Arama';
import Rakipler from '../pages/Rakipler/Rakipler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="MainPage" component={Home} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name='MessagesPage' component={Message}  />
                <Stack.Screen name='AramaPage' component={Arama} />
                <Stack.Screen name='RakipPage' component={Rakipler} />
                {/* <Stack.Screen name='DetailPage' component={Detail} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;


