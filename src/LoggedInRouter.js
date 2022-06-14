import * as React from 'react';
import { SafeAreaView, View, Text, Button, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './pages/Profile/Profile';
import Message from './pages/Message/Message';
import Arama from './pages/Arama/Arama';
import Rakipler from './pages/Rakipler/Rakipler';
import NewStack from './pages/NewStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator  } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/Home';

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
                <Stack.Screen name='ProfilePage' component={Profile}  />
                <Stack.Screen name='AramaPage' component={Arama} />
                {/* <Stack.Screen name='DetailPage' component={Detail} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;


