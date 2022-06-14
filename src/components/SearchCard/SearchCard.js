import React from 'react';
import {TextInput, View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './SearchCard.style';

const SearchCard = props => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={{backgroundColor: props.color, borderRadius: 15}}>
        <View style={styles.container}>
          <View style={styles.icon_container}>{props.icon}</View>
          <View style={styles.detail_container}>
            <Text style={styles.title}>{props.title}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchCard;
