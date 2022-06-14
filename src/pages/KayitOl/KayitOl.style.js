import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        display: 'flex',
        flex: 1,
    },
    titles_container:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    title: {
        marginLeft: 70,
        padding: 10,
        marginTop: 20,
        marginBottom: 10,
        fontFamily: "Montserrat-Bold",
        fontSize: 32,
        color: "black",
        flexDirection: 'row',
        textAlign: 'center',
    },
    sifremi_unuttum: {
        color: "#5DB075",
        fontFamily: "Montserrat-Bold",
        fontSize: 15,
        marginVertical: 10,
        textAlign: 'center',
    },
    giris_yap:{
        color: "#5DB075",
        fontSize: 16,
        marginTop: 12,
    }
})