import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 4,
    height: 100,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#f1f1f1',
    backgroundColor: '#fff',
    shadowOffset: { width: 0, height: 0 },
    shadowColor: '#333333',
    shadowOpacity: 0.8,
    flexDirection: 'column',
    overflow: 'hidden'
  },
  header: {
    flexDirection: 'row',
    height: 35,
    alignItems: 'center'
  },
  title: {
    flex: 1,
    flexDirection: 'column',
    justifyContent:'center',
  },
  titleTxt: {
    margin: 8,
    color: '#002f58',
    fontSize: 14,
    fontWeight: 'bold'
  },
  arrowBtn: {
    marginRight: 5
  },
  body: {
    padding: 8,
    height: 50,
    flexDirection: 'column',
  },
  textInput:{ 
    height: 35, 
    borderColor: '#f1f1f1', 
    borderWidth: 1 
  }
});
