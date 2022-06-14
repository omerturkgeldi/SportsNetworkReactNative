import React from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import styles from './Arama.style';
import theme from '../../theme';
import SearchBar from '../../components/SearchBar/SearchBar';
import RakipCard from '../../components/RakipCard/RakipCard';
import SearchCard from '../../components/SearchCard/SearchCard';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Rakipler from '../Rakipler/Rakipler';

const Stack = createNativeStackNavigator();

const Arama = ({navigation}) => {
  function goToDersler() {
    navigation.navigate('DerslerPage');
  }

  function goToTesisler() {
    navigation.navigate('TesislerPage');
  }

  function goToEtkinlikler() {
    navigation.navigate('EtkinliklerPage');
  }

  function goToRakipler() {
    navigation.navigate('RakiplerPage');
  }

  function goToGruplar() {
    navigation.navigate('GruplarPage');
  }

  return (
    <SafeAreaView>
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen name="RakipScreen" component={Rakipler} />
        </Stack.Navigator>
      </NavigationContainer>
      <View style={styles.container}>
        {/* <SearchCard color="red" title="Ders" />
        <SearchCard color="#ff7f00" title="Etkinlik" /> */}
        <SearchCard
          onPress={goToDersler}
          icon={
            <IconMaterialIcons
              name="sports-tennis"
              color="black"
              size={45}
              style={{alignSelf: 'center'}}
            />
          }
          color="#FFB443"
          title="Dersler"
        />

        <View style={styles.seperator} />

        <SearchCard
          onPress={goToTesisler}
          icon={
            <IconEntypo
              name="sports-club"
              color="black"
              size={45}
              style={{alignSelf: 'center'}}
            />
          }
          color="#FFB443"
          title="Tesisler"
        />
        <View style={styles.seperator} />
        <SearchCard
          onPress={goToEtkinlikler}
          icon={
            <IconMaterialIcons
              name="sports-handball"
              color="black"
              size={45}
              style={{alignSelf: 'center'}}
            />
          }
          color="#FFB443"
          title="Etkinlikler"
        />
        <View style={styles.seperator} />

        <SearchCard
          onPress={goToRakipler}
          icon={
            <IconMaterialIcons
              name="sports-kabaddi"
              color="black"
              size={45}
              style={{alignSelf: 'center'}}
            />
          }
          color="#FFB443"
          title="Rakipler"
        />
        <View style={styles.seperator} />

        <SearchCard
          onPress={goToGruplar}
          icon={
            <Icon
              name="group"
              color="black"
              size={45}
              style={{alignSelf: 'center'}}
            />
          }
          color="#FFB443"
          title="Gruplar"
        />
      </View>
    </SafeAreaView>
  );
};

export default Arama;
