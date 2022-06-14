import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import styles from './GirisYap.style';
import Button from '../../components/Button';
import Input from '../../components/Input/Input';

const GirisYap = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function goToKayitOl() {
    console.log('Kayıt Ol sayfasına yönlendiriliyor.');
    navigation.navigate('KayitOlScreen');
  }

  function GirisYap() {
    console.log('Giriş yapılıyor');
    navigation.navigate('MainPage');
    console.log(email)
    console.log(password)
  }

  function SifremiUnuttum() {
    console.log('Şifremi unuttum');
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titles_container}>
        <Text></Text>
        <Text style={styles.title}>Giriş Yap</Text>
        <Text onPress={goToKayitOl} style={styles.kayit_ol}>
          Kayıt Ol
        </Text>
      </View>
      <Input label="Email" value={email} onChange={e => console.log(e.target.value)} />
      <Input label="Şifre" value={password} onChange={e => setPassword(e.target.value)} />
      <Button text="Giriş Yap" onPress={GirisYap} />
      <Text style={styles.sifremi_unuttum} onPress={SifremiUnuttum}>
        Şifremi Unuttum
      </Text>
    </SafeAreaView>
  );
};

export default GirisYap;
