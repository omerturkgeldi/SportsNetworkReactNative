import { StyleSheet } from "react-native";
import theme from '../../theme'


export default StyleSheet.create({
    container: {
        padding: 10,
        fontFamily:"Montserrat-Black",
        flexDirection: 'column',
    },
    inner_container:{
        marginTop: 50,
        display: 'flex',
        flexDirection: 'column',
    },
    photo_container:{
        display: 'flex',
        alignItems: 'center',
    },
    foto_degistir:{
        marginTop: -15,
        fontFamily: 'Montserrat-Bold',
        color: theme.palette.darkGreen,
    },
    profile_pic:{
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 40,
    },
    cikis_yap_container:{
        display: 'flex',
        borderWidth: 2,
        borderColor: '#fff',
        backgroundColor: '#cc0000',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: 130,
        marginTop: 20,
        marginLeft: 230,
        height: 50,
    },
    cikis_yap:{
        position: 'relative',
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Montserrat-Medium',
    },
    seperator: {
        borderWidth: 1,
        width: 300,
        borderColor: '#e0e0e0',
        alignSelf: 'center',
    }
})