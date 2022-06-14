import React from 'react'
import { SafeAreaView, View, Text } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input/Input';
import styles from "./KayitOl.style";

const KayıtOl = ({navigation}) => {

    function KayitOl() {
        console.log("Kayıt Ol");
    }

    function goToGirisYap(){
        console.log("Giriş Yap'a yönlendiriliyor.");
        navigation.navigate('GirisYapScreen')
    }

    function SifremiUnuttum() {
        console.log("Şifremi unuttum");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titles_container}>
                <Text></Text>
                <Text style={styles.title}>Kayıt ol</Text>
                <Text onPress={goToGirisYap} style={styles.giris_yap}>Giriş Yap</Text>
            </View>
            <Input label="Adı" />
            <Input label="Soyadı" />
            <Input label="Email" />
            <Input label="Şifre" />
            <Button text="Kayıt Ol" onPress={KayitOl} />
        </SafeAreaView>
    )
}

export default KayıtOl;