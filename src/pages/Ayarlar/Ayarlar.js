import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import styles from './Ayarlar.style';
import theme from '../../theme';
import AyarCard from '../../components/AyarCard/AyarCard';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Rakipler from '../Rakipler/Rakipler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const ayarlar_data = [
  {
    id: 1,
    ayarIsim: 'Çıkış Yap',
  },
  {
    id: 2,
    ayarIsim: 'Çıkış Yap 222',
  },
  {
    id: 3,
    ayarIsim: 'İsim değiştir',
  },
];

const Ayarlar = () => {
  function cikisYap() {
    console.log('Çıkış yapılıyor...');
  }

  function profilFotoDegistir() {
    console.log('Profil fotoğrafı değiştiriliyor...');
  }

  const [list, setList] = useState(ayarlar_data);

  const renderSeperator = () => <View style={styles.seperator} />;

  const renderSettings = ({item}) => <AyarCard title={item.ayarIsim} />;
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={styles.container}>
         <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen name="RakipPage" component={Rakipler} />
          {/* <Stack.Screen name='DetailPage' component={Detail} /> */}
        </Stack.Navigator>
      </NavigationContainer>
      <ScrollView>
        <View style={styles.photo_container}>
          <Image
            style={styles.profile_pic}
            source={{
              uri:
                'https://www.pngkey.com/png/full/115-1150152_default-profile-picture-avatar-png-green.png',
            }}
          />
          <Text onPress={profilFotoDegistir} style={styles.foto_degistir}>
            Profil fotoğrafını değiştir
          </Text>
        </View>

        <View style={styles.inner_container}>
          <Input label="Email" />
          <View style={styles.seperator} />
          <Input label="Şifre" />

          {/* <Button text="Kaydet">sdf</Button> */}

          <View style={styles.cikis_yap_container}>
            <Text onPress={cikisYap} style={styles.cikis_yap}>
              Çıkış Yap
            </Text>
          </View>
        </View>

        {/* <FlatList 
                keyExtractor={item => item.id}
                data={list}
                renderItem={renderSettings}
                ItemSeperatorComponent={renderSeperator}
            /> */}
      </ScrollView>
     
    </SafeAreaView>
  );
};

export default Ayarlar;
