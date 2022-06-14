import React from 'react'
import { SafeAreaView, Text, Image } from 'react-native';
import styles from "./Anasayfa.style";
import theme from '../../theme';
// import MapView from 'react-native-maps';


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


const Anasayfa = () => {
    return (
       <SafeAreaView>
         {/* <MapView style={styles.map} /> */}
        <Text>Anasayfa</Text>
        </SafeAreaView>
    )
}

export default Anasayfa;