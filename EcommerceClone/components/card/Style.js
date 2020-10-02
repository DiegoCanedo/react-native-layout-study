import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 30,
    margin: 20,
    maxHeight: '65%',
    backgroundColor: 'white',
  },

  shadowBox: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 10,
  },

  containerImagem: {
    flex: 5,
    borderRadius: 30,
    marginBottom: 40,
  },

  imagem: {
    flex: 1,
    borderRadius: 30,
  },

  containerFooter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 30,
    marginRight: 30,
  },

  containerText: {
    flex: 4,
  },

  containerButton: {
    flex: 2,
  },

  h3: {
    fontSize: 25,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: 'black',
  },

  h6: {
    fontSize: 15,
    fontFamily: 'Roboto',
    color: 'black',
  },

  oferta: {
    color: '#fd8e7d',
    fontWeight: 'bold',
  },

  linearGradient: {
    flex: 2,
    paddingLeft: 2,
    paddingRight: 2,
    borderRadius: 5,
    maxHeight: '50%',
  },

  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default Style;
