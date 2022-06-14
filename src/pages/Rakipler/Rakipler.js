import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import styles from './Rakipler.style';
import theme from '../../theme';
import SearchBar from '../../components/SearchBar/SearchBar';
import RakipCard from '../../components/RakipCard/RakipCard';

const rakipler_list = [
  {
    id: 1,
    adi: 'Ömer Türkgeldi',
    ilgi_alanlari: 'Basketbol, Futbol, Masa Tenisi',
    image_url: 'https://avatars.githubusercontent.com/u/55360597?v=4',
  },
  {
    id: 2,
    adi: 'Sebastian Vettel',
    ilgi_alanlari: 'Futbol, Formula 1',
    image_url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Sebastian_Vettel_2017_Malaysia_2.jpg/640px-Sebastian_Vettel_2017_Malaysia_2.jpg',
  },
  {
    id: 3,
    adi: 'Timo Boll',
    ilgi_alanlari: 'Masa Tenisi',
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaeQDEx9cvmWcHFbCbuPMQPqFcfYlUpkgncg&usqp=CAU',
  },
  {
    id: 4,
    adi: 'Yelena İsinbayeva',
    ilgi_alanlari: 'Sırıkla Atlama',
    image_url:
      'https://cdn.ntvspor.net//C/I//540/isinbayeva3_OQ45L.jpg?w=940&mode=crop&h=626',
  },
  {
    id: 5,
    adi: 'Usain Bolt',
    ilgi_alanlari: 'Atletizm, Futbol',
    image_url:
      'https://img.fanatik.com.tr/img/75/0x0/619259cdae298b9e9e6bc6c8.jpg',
  },
  {
    id: 6,
    adi: 'Rafael Nadal',
    ilgi_alanlari: 'Tenis',
    image_url:
      'https://i.cnnturk.com/i/cnnturk/75/740x416/5f831e10d265a21b482d8315.jpg',
  },
];

const Rakipler = () => {
  const [list, setList] = useState([]);
  const renderSeperator = () => <View style={styles.seperator} />;
  const renderUsers = ({item}) => (
    <RakipCard
      image_url={item.image_url}
      adsoyad={item.adi}
      ilgi_alanlari={item.ilgi_alanlari}
    />
  );

  useEffect(() => {
    setList(rakipler_list);
  }, []);

  const handleSearch = text => {
    const filteredList = rakipler_list.filter(item => {
      const searchedText = text.toLowerCase();
      const currentTitle = item.adi.toLowerCase();

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
          <Text style={styles.list_title}>Çevrendeki Sporcular</Text>
          <View style={styles.list}>
            <FlatList
              style={{maxHeight: 420}}
              keyExtractor={item => item.id}
              data={list}
              renderItem={renderUsers}
              ItemSeperatorComponent={renderSeperator}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Rakipler;
