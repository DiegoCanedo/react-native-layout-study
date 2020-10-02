import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Style';
import CardOffer from '../../components/card/Card';

const Oferta = ({navigation}) => {
  let screenWidth = Dimensions.get('window').width;
  let screenHeight = Dimensions.get('window').height;

  const [lista, SetLista] = useState([]);

  useEffect(() => {
    SetLista([
      {
        url:
          'https://loveincorporated.blob.core.windows.net/contentimages/main/8a615221-d260-4987-8ac7-56fb3e92734b-morrisons-dine-in.jpg',
        nome: 'Rodizio de Massa',
        oferta: '20',
      },
      {
        url:
          'https://www.sydneyoperahouse.com/content/dam/soh/visit-us/eat-and-drink/opera-bar/Opera%20Bar%20Sake%20Bar_1600x1600.jpg.image.800.800.high.jpg',
        nome: 'Sushi Kenpo',
        oferta: '50',
      },
    ]);
  }, []);

  return (
    <>
      <View style={styles.container}>
        {/* <Button title="Voltar" onPress={() => navigation.navigate('Login')} /> */}
        <View style={styles.containerTop}>
          <View style={styles.containerHead}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Icon name="chevron-left" size={20} color="#757475" />
            </TouchableOpacity>
            <Icon name="search" size={20} color="#757475" />
          </View>
          <Text style={styles.h2}>Offers</Text>
        </View>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}>
          {lista.map((e) => (
            <CardOffer key={e.nome} item={e} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <Icon name="certificate" size={20} color="#fd8e7d" />
        <Icon name="shopping-cart" size={20} color="#757475" />
        <Icon name="user-o" size={20} color="#757475" />
        <Icon name="gear" size={20} color="#757475" />
      </View>
    </>
  );
};

export default Oferta;
