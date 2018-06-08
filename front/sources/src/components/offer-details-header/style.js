import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    height: 150,
    flexDirection: 'column',
    backgroundColor: '#05869b',
  },
  container: {
    flex:1,
    flexDirection: 'column',
    marginTop: 20,
    alignItems: 'stretch'
  },
  imageLogo:{
    top: -20, 
    left: 0,
    height:150,
    backgroundColor:'red'
  },
  btnTouchable: {
    position: 'absolute',
    marginLeft: 8,
    marginTop: 4,
    height:30,
    width:30
  }
})