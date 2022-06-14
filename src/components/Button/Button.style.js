import { StyleSheet } from "react-native";
import theme from '../../theme'


export default StyleSheet.create({
    container: {
        backgroundColor: theme.palette.darkGreen,
        borderRadius: 25,
        padding: 15,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Montserrat-Bold',
    },
})