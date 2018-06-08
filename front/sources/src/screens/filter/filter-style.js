import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  action:{
    margin: 5,
    position: 'relative',
    height: 40,
    borderRadius: 7,
    flexDirection: 'column',
    justifyContent:'center',
    backgroundColor:'#05869b'
  },
  btnAcquire:{
    height: 40,
    alignItems:'center',
    justifyContent:'center',

  },
  btnAcquireText:{
    fontSize: 18,
    color: '#fff'
  },
})