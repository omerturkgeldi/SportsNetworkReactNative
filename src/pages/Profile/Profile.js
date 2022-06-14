import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, FlatList, Image} from 'react-native';
import EtkinlikCard from '../../components/EtkinlikCard/EtkinlikCard';
import styles from './Profile.style';

const etkinlikler_list = [
  {
    id: 1,
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaeQDEx9cvmWcHFbCbuPMQPqFcfYlUpkgncg&usqp=CAU",
    baslik: 'Masa Tenisi',
    aciklama: "Timo Boll ile Bostanlı'da masa tenisi oynadı.",
  },
  {
    id: 2,
    image_url: "https://i.cnnturk.com/i/cnnturk/75/740x416/5f831e10d265a21b482d8315.jpg",
    baslik: 'Tenis',
    aciklama: "Rafael Nadal ile Örnekköy'de tenis oynadı.",
  },
  {
    id: 3,
    image_url: "https://img.fanatik.com.tr/img/75/0x0/619259cdae298b9e9e6bc6c8.jpg",
    baslik: 'İzmir Maratonu',
    aciklama: "İzmir Maratonu'nda koştu.",
  },
];

const Profile = () => {
  const [list, setList] = useState([]);
  const renderSeperator = () => <View style={styles.seperator} />;
  const renderEtkinlik = ({item}) => (
    <EtkinlikCard
      image_url={item.image_url}
      baslik={item.baslik}
      aciklama={item.aciklama}
    />
  );

  useEffect(() => {
    setList(etkinlikler_list);
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.banner}>
        <Image
          style={styles.profile_image}
          source={{
            uri: 'https://avatars.githubusercontent.com/u/55360597?v=4',
          }}
        />
      </View>
      <Text style={styles.ad_soyad}>Ömer Türkgeldi</Text>

      <FlatList
        style={{maxHeight: 300}}
        keyExtractor={item => item.id}
        data={list}
        renderItem={renderEtkinlik}
        ItemSeperatorComponent={renderSeperator}
      />
    </SafeAreaView>
  );
};

export default Profile;
