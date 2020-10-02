import React from 'react';
import {View, Text, Image, Button, Dimensions} from 'react-native';
import {BoxShadow} from 'react-native-shadow';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Style';

const Card = (props) => {
  let screenWidth = Dimensions.get('window').width;
  let screenHeight = Dimensions.get('window').height;

  return (
    <View
      style={{
        width: screenWidth,
        height: screenHeight,
      }}>
      <View style={[styles.containerPrincipal, styles.shadowBox]}>
        <View style={styles.containerImagem}>
          <Image style={styles.imagem} source={{uri: props.item.url}} />
        </View>
        <View style={styles.containerFooter}>
          <View style={styles.containerText}>
            <Text style={styles.h3}>{props.item.nome}</Text>
            <Text style={styles.h6}>
              Price to{' '}
              <Text style={styles.oferta}>{props.item.oferta}% Off</Text>
            </Text>
          </View>
          <View style={styles.containerButton}>
            <LinearGradient
              colors={['#feb38d', '#fd877f']}
              angle={150}
              angleCenter={{x: 0.5, y: 0.5}}
              style={[styles.linearGradient]}>
              <Text style={styles.buttonText}>Info</Text>
            </LinearGradient>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;
