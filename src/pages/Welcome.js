import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text} from 'react-native';
import Button from '../components/Button';

function Welcome({navigation}) {
  function goToKayitOl() {
    navigation.navigate('KayitOlScreen');
  }
  function goToGirisYap() {
    navigation.navigate('GirisYapScreen');
  }
  function goToAnasayfa() {
    navigation.navigate('MainPage');
  }
  function goToProfile() {
    navigation.navigate('ProfilePage');
  }
  function goToMessages() {
    navigation.navigate('MessagesPage');
  }
  function goToMainPage() {
    console.log('öncesi');
    navigation.navigate('MainPage');
    console.log('sonrası');
  }
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/logo.png')}
      />
      {/* <Text style={styles.header}>SportsNetwork</Text> */}
      <Button text={'Kayıt Ol'} onPress={goToKayitOl} />
      <Button text={'Giriş Yap'} onPress={goToGirisYap} />
      <Button
        text={'Anasayfa'}
        onPress={goToAnasayfa}
        options={{
          headerShown: false,
        }}
      />
      {/* <Button text={"Profile"} onPress={goToProfile}  />
            <Button text={"Messages"} onPress={goToMessages} />
            <Button text={"Anasayfa"} onPress={goToMainPage} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    marginBottom: 100,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 50,
    height: 200,
    width: 300,
  },
});

export default Welcome;
