import React from 'react'
import { SafeAreaView, Text} from 'react-native';
import styles from "./Message.style";


const Message = () => {
    return(
        <SafeAreaView>
            <Text style={styles.container}>Messages</Text>
            <Text style={styles.containerLeft}>Message1111</Text>
            <Text style={styles.containerRight}>Message2222</Text>
            <Text style={styles.containerLeft}>Message1111</Text>
            <Text style={styles.containerRight}>Message2222</Text>
            <Text style={styles.containerLeft}>Message1111</Text>
            <Text style={styles.containerRight}>Message2222</Text>
            <Text style={styles.containerLeft}>Message1111</Text>
            <Text style={styles.containerRight}>Message2222</Text>
            <Text style={styles.containerLeft}>Message1111</Text>
            <Text style={styles.containerRight}>Message2222</Text>
            <Text style={styles.containerRight}>Message2222</Text>
            <Text style={styles.containerRight}>Message2222</Text>
            <Text style={styles.containerRight}>Message2222</Text>

        </SafeAreaView>
    )
}

export default Message;