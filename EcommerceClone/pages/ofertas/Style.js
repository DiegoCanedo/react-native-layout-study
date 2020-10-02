import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },

  containerTop: {
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },

  containerHead: {
    maxHeight: 80,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
  },

  h2: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: 'black',
    marginBottom: 20,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopColor: '#f7f7f7',
    borderTopWidth: 1,
    minHeight: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default Style;
