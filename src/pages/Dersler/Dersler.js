import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import styles from './Dersler.style';
import theme from '../../theme';
import SearchBar from '../../components/SearchBar/SearchBar';
import DersCard from '../../components/DersCard/DersCard';

const dersler_list = [
  {
    id: 1,
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShOgmtbofJWOfwkSX7OTHA-9LbbQcVO4Z7BErIUIB-OhMysY-0osj6e-bHb_DPeNtABr0&usqp=CAU',
    egitmen: 'Marsel İlhan',
    sehir: 'İzmir',
    tesis: 'Örnekköy Tenis Kortları',
    spor: 'Tenis',
    baslik: 'Çocuklara tenis dersleri',
    aciklama:
      '5-12 yaş arası çocuklara tenis dersi veriyorum. Pazartesi günleri hariç haftada 3 gün ders verebilirim.',
    konum: 'Örnekköy, İzmir',
    saatlik_ucret: '250 ₺',
    ilan_tarihi: '15.06.22',
  },
  {
    id: 2,
    image_url:
      'https://teknosafari.net/wp-content/uploads/2020/07/en-iyi-mobil-futbol-oyunu-hangisi-en-iyi-5-mobil-futbol-oyunu-2020.jpg',
    egitmen: 'Fatih Terim',
    sehir: 'İstanbul',
    tesis: 'Florya Metin Oktay Tesisleri',
    spor: 'Futbol',
    baslik: 'Futbol dersi verilir',
    aciklama: 'Genç-yaşlı herkes için futbol dersleri',
    konum: 'Bakırköy, İzmir',
    saatlik_ucret: '470 ₺',
    ilan_tarihi: '12.06.22',
  },
  {
    id: 3,
    image_url:
      'https://gezilmesigerekenyerler.com/wp-content/uploads/2021/07/istanbul-Karting-Park.jpg',
    egitmen: 'Cem Bölükbaşı',
    sehir: 'İstanbul',
    tesis: 'Intercity İstanbul Park',
    spor: 'Go-kart',
    baslik: 'Yetişkinler için gokart seansları',
    aciklama: 'Formula 2 pilotundan özel ders',
    konum: 'Tuzla, İstanbul',
    saatlik_ucret: '320 ₺',
    ilan_tarihi: '10.10.21',
  },
];

const Dersler = () => {
  const [list, setList] = useState([]);
  const renderSeperator = () => <View style={styles.seperator} />;
  const renderDersler = ({item}) => (
    <DersCard
      image_url={item.image_url}
      baslik={item.baslik}
      aciklama={item.aciklama}
      egitmen={item.egitmen}
      tesis={item.tesis}
      saatlik_ucret={item.saatlik_ucret}
      ilan_tarihi={item.ilan_tarihi}
    />
  );

  useEffect(() => {
    setList(dersler_list);
  }, []);

  const handleSearch = text => {
    const filteredList = dersler_list.filter(item => {
      const searchedText = text.toLowerCase();
      const currentTitle = item.baslik.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });

    setList(filteredList);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.searchbar_container}>
          <SearchBar onSearch={handleSearch} />
        </View>
        <View style={styles.list_container}>
          <Text style={styles.list_title}>Ders Veren Eğitmenler</Text>
          <View style={styles.list}>
            <FlatList
              style={{maxHeight: 420}}
              keyExtractor={item => item.id}
              data={list}
              renderItem={renderDersler}
              ItemSeperatorComponent={renderSeperator}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Dersler;
