import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './EtkinlikCard.style';
import Button from '../Button/Button';

const EtkinlikCard = props => {
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
            <Text style={styles.baslik}>{props.baslik}</Text>
            <Text style={styles.aciklama}>{props.aciklama}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default EtkinlikCard;
