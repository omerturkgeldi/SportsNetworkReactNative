import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Profile from './Profile/Profile';
import Message from './Message/Message';
import Anasayfa from './Anasayfa/Anasayfa';
import AramaNavigation from './Arama/AramaNavigation';
import Ayarlar from './Ayarlar/Ayarlar';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';
import theme from '../theme';
import {StyleSheet} from 'react-native';
import Rakipler from './Rakipler/Rakipler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Home = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {
            fontSize: 12,
            fontFamily: 'Montserrat-Bold',
          },
        }}
        screenOptions={({route}) => ({
          tabBarShowLabel: true,
          tabBarStyle: {
            paddingBottom: 10,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            elevation: 0,
            backgroundColor: theme.palette.darkBlue,
            borderRadius: 0,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: 75,
            ...styles.shadow,
          },
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'ProfilePage') {
              return (
                <View style={{top: 5}}>
                  <IconFeather
                    name={focused ? 'user' : 'user'}
                    size={33}
                    color={color}
                  />
                </View>
              );
            } else if (route.name === 'MessagesPage') {
              return (
                <IconFeather
                  name={focused ? 'message-circle' : 'message-circle'}
                  size={33}
                  color={color}
                />
              );
            } else if (route.name === 'AnasayfaPage') {
              return (
                <IconFeather
                  name={focused ? 'home' : 'home'}
                  size={33}
                  color={color}
                />
              );
            } else if (route.name === 'AramaPage') {
              return (
                <IconFeather
                  name={focused ? 'search' : 'search'}
                  size={33}
                  color={color}
                />
              );
            } else if (route.name === 'AyarlarPage') {
              return (
                <IconFeather
                  name={focused ? 'settings' : 'settings'}
                  size={33}
                  color={color}
                />
              );
            } else if (route.name === 'DenemeStack') {
              return <View style={{width: 0, height: 0}}></View>;
            }
          },
          tabBarInactiveTintColor: '#fff',
          tabBarActiveTintColor: theme.palette.lightGreen,
        })}
      >
        {/* <Tab.Screen name="MainPage" component={Anasayfa} /> */}

        <Tab.Screen
          name="AnasayfaPage"
          component={Anasayfa}
          options={{
            title: 'Anasayfa',
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold',
              fontSize: 23,
            },
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: theme.palette.darkGreen,
            },
          }}
        />
        <Tab.Screen
          name="AramaPage"
          component={AramaNavigation}
          options={{
            title: 'Ara',
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold',
              fontSize: 23,
            },
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: theme.palette.darkGreen,
            },
          }}
        />

        <Tab.Screen
          name="ProfilePage"
          component={Profile}
          options={{
            title: 'Profil',
            labelStyle: {
              fontSize: 23,
            },
            titleStyle: {
              fontSize: 22,
            },
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold',
              fontSize: 23,
            },
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: theme.palette.darkGreen,
            },
          }}
        />
        <Tab.Screen
          name="MessagesPage"
          component={Message}
          options={{
            title: 'Mesajlar',
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold',
              fontSize: 23,
            },
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: theme.palette.darkGreen,
            },
          }}
        />

        <Tab.Screen
          name="AyarlarPage"
          component={Ayarlar}
          options={{
            title: 'Ayarlar',
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold',
              fontSize: 23,
            },
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: theme.palette.darkGreen,
            },
          }}
        />

       
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// const Stack = createNativeStackNavigator();
// const DenemeStack = () => {
//   return (
//     <Stack.Navigator initialRoutName="RakiplerScreen">
//       <Stack.Screen name="RakiplerScreen" component={Rakipler} />
//     </Stack.Navigator>
//   );
// };

const styles = StyleSheet.create({
  container: {
    padding: 10,
    fontFamily: 'Montserrat-Black',
    flexDirection: 'row',
  },
  shadow: {
    shadowColor: '#7f5df0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Home;
