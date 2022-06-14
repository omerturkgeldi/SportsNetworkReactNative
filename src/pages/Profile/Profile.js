import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import styles from './Profile.style';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.banner}>
        <View>
          <Image
            style={styles.profile_image}
            source={{
              uri:
                'https://gezilmesigerekenyerler.com/wp-content/uploads/2021/07/istanbul-Karting-Park.jpg',
            }}
          />
        </View>
      </View>
      <Text>Profile</Text>
    </SafeAreaView>
  );
};

export default Profile;
