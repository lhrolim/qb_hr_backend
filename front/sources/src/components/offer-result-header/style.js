import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    height: 120,
    flexDirection: 'column',
    backgroundColor: '#05869b',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20
  },
  textContainer: {
    alignItems:'center',
    flexDirection: 'row', 
    backgroundColor: '#6fc2d0',
    height: 35,
    margin:5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight:10,
    borderRadius: 7,
  },
  iconContainer: {
    alignItems:'center',
    width: 30,
    marginLeft: 20,
  },
  text: {
    marginLeft: 10,
    textAlign: 'center',
    fontSize: 16,
    color: '#fafdfd',
  }
})