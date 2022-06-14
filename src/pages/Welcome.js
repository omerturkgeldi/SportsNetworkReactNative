import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Button from "../components/Button";

function Welcome({navigation}) {

    function goToMemberSign(){
        navigation.navigate('MemberSignScreen')
    }
    function goToProfile(){
        navigation.navigate('ProfilePage')
    }
    function goToMessages(){
        navigation.navigate('MessagesPage')
    }
    function goToMainPage() {
        console.log("öncesi")
        navigation.navigate('MainPage')
        console.log("sonrası")
    }
    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.header}>SportsNetwork</Text>
            <Button text={"Üye Kaydı Oluştur"} onPress={goToMemberSign} />
            <Button text={"Profile"} onPress={goToProfile}  />
            <Button text={"Messages"} onPress={goToMessages} />
            <Button text={"Anasayfa"} onPress={goToMainPage} />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    header: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        fontFamily: 'Montserrat-Bold'
    },
})


export default Welcome;