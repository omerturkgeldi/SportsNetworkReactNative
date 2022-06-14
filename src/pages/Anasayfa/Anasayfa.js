import React from 'react'
import { SafeAreaView, Text } from 'react-native';
import styles from "./Anasayfa.style";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Profile from '../Profile/Profile';
import Message from '../Message/Message';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';


const Anasayfa = () => {
    function goToProfile() {
        navigation.navigate('ProfilePage')
    }
    function goToMessages() {
        navigation.navigate('MessagesPage')
    }
    function goToMainPage() {
        navigation.navigate('MainPage')
    }
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        if (route.name === 'ProfilePage') {
                            return (
                                <Icon name="rocket" size={30} color="#900" />
                            );
                        } else if (route.name === 'MessagesPage') {
                            return (
                                <IconFeather
                                    name={focused ? 'message-circle' : 'message-circle'}
                                    size={size}
                                    color={color}
                                />
                            );
                        }else if (route.name === 'MainPage') {
                            return (
                                <IconFeather
                                    name={focused ? 'home' : 'home'}
                                    size={size}
                                    color={color}
                                />
                            );
                        }
                    },
                    tabBarInactiveTintColor: 'gray',
                    tabBarActiveTintColor: 'tomato',
                })}
            >
                <Tab.Screen name="MainPage" component={Anasayfa} />
                <Tab.Screen name="ProfilePage" component={Profile} />
                <Tab.Screen name="MessagesPage" component={Message} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Anasayfa;