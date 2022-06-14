import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        marginVertical: 20,
        marginHorizontal: 10,
        padding: 10,
        fontFamily:"Montserrat-Black",
    },
    searchbar_container: {
        margin: 15,
    },
    list_container:{
        display: 'flex',
        flexDirection: 'column',
    },
    list_title: {
        fontFamily: 'Montserrat-Bold',
        color: 'black',
        fontSize: 24,
    },   
    seperator: {
        marginVertical: 15,
        borderWidth: 1,
        width: 300,
        borderColor: '#e0e0e0',
        alignSelf: 'center',
    },
    list: {},
})