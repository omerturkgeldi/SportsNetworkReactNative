import * as React from 'react';
import { SafeAreaView, View, Text, Button, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './pages/Profile/Profile';
import Message from './pages/Message/Message';
import Welcome from './pages/Welcome'
import SignUp from "./pages/SignUp";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator  } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Anasayfa from './pages/Anasayfa/Anasayfa';


const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            {/* <Tab.Navigator>
                <Tab.Screen name="ProfilePage" component={Profile} />
                <Tab.Screen name="MessagesPage" component={Message}/>
            </Tab.Navigator> */}
            {/* <Drawer.Navigator initialRouteName="ProfilePage">
                <Drawer.Screen name='ProfilePage' component={Profile} />
                <Drawer.Screen name='WelcomeScreen' component={Message} />
            </Drawer.Navigator> */}
            <Stack.Navigator>
            <Stack.Screen name="WelcomeScreen" component={Welcome} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name="MemberSignScreen" component={SignUp}/>
                <Stack.Screen name='MessagesPage' component={Message} />
                  <Stack.Screen name='ProfilePage' component={Profile} />
                  <Stack.Screen name='MainPage' component={Anasayfa} options={{ headerShown: false }}/>
                {/* <Stack.Screen name='DetailPage' component={Detail} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;


