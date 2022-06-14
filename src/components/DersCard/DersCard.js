import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './DersCard.style';
import Button from '../Button/Button';

const DersCard = props => {
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
            <Text style={styles.adsoyad}>{props.baslik}</Text>
            <Text style={styles.aciklama}>{props.aciklama}</Text>

            <View style={styles.egitmen_tesis_container}>
              <View style={styles.egitmen_container}>
                <Text style={styles.egitmen_label}>Eğitmen: </Text>
                <Text style={styles.egitmen}>{props.egitmen}</Text>
              </View>

              <View style={styles.tesis_container}>
                <Text style={styles.tesis_label}>Tesis: </Text>
                <Text style={styles.tesis}>{props.tesis}</Text>
              </View>
            </View>

            <View style={styles.ucret_tarih_container}>
              <Text style={styles.saatlik_ucret}>{props.saatlik_ucret}</Text>
              <Text style={styles.ilan_tarihi}>{props.ilan_tarihi}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DersCard;
