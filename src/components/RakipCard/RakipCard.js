import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './RakipCard.style';
import Button from '../Button/Button';

const RakipCard = props => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: props.image_url,
          }}
        />
        <View style={styles.card_detail}>
          <View style={styles.info}>
            <Text style={styles.adsoyad}>{props.adsoyad}</Text>
            <Text style={styles.ilgi_alanlari}>{props.ilgi_alanlari}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RakipCard;
