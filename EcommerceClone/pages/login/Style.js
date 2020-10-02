import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 30,
    paddingTop: 100,
  },

  containerLogin: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    marginBottom: 40,
    borderRadius: 5,
    maxHeight: '50%',
    padding: 40,
    marginTop: 50,
  },

  containerLoginBody: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    marginTop: 40,
  },

  containerLoginFooter: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    width: '100%',
    maxHeight: '20%',
    marginTop: 40,
  },

  containerIcons: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  icons: {
    marginRight: 20,
  },

  linearGradient: {
    flex: 2,
    paddingLeft: 2,
    paddingRight: 2,
    borderRadius: 5,
    maxHeight: '70%',
  },

  buttonText: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },

  h2: {
    fontSize: 40,
    //fontWeight: 100,
    color: 'white',
    margin: 0,
  },

  h6: {
    fontSize: 17,
    //fontWeight: 100,
    color: 'white',
    marginTop: 5,
  },

  signUp: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
  },
});

export default Style;
