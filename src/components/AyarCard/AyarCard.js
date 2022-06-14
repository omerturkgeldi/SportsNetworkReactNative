import React from "react"
import { View, Text, Image } from "react-native"
import styles from "./AyarCard.styles";
import Button from '../Button/Button';

const AyarCard = (props) => {
    return (
        <Button text={props.title}>
            <View style={styles.container}>
                <View style={styles.inner_container}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
            </View>
        </Button>
        
    )
}


export default AyarCard;