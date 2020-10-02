import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Style';
import LinearGradient from 'react-native-linear-gradient';
import InputAndroidStyled from '../../components/textInput/InputAndroidStyled';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#feb38d', '#fd877f']}
      style={styles.container}
      useAngle={true}
      angle={328}
      angleCenter={{x: 0.5, y: 0.5}}>
      <Text style={styles.h2}>Hello There.</Text>
      <Text style={styles.h6}>Login or sign up to continue.</Text>
      <View style={styles.containerLogin}>
        <View style={styles.containerLoginBody}>
          <InputAndroidStyled placeholder="Email" />
          <InputAndroidStyled
            autoCorrect={false}
            secureTextEntry
            placeholder="Password"
          />
        </View>
        <View style={styles.containerLoginFooter}>
          <View style={styles.containerIcons}>
            <Icon
              style={styles.icons}
              name="facebook-square"
              size={45}
              color="#385299"
            />
            <Icon
              style={styles.icons}
              name="google-plus-square"
              size={45}
              color="#d64936"
            />
          </View>
          {/* <Button title="Login" onPress={() => navigation.navigate('Oferta')} /> */}
          <TouchableOpacity onPress={() => navigation.navigate('Oferta')}>
            <LinearGradient
              colors={['#feb38d', '#fd877f']}
              angle={150}
              angleCenter={{x: 0.5, y: 0.5}}
              style={styles.linearGradient}>
              <Text style={styles.buttonText}>Sign In</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.signUp}>Don't have an account? SIGN UP</Text>
    </LinearGradient>
  );
};

export default Login;
