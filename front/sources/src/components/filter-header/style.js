import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#05869b',
    flexDirection: 'column',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0,  height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  content: {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop: 20,
    marginLeft: 8,
    marginRight: 8,
    alignItems:'center',
  },
  closeBtnTouchable:{
    width: 70,
    marginLeft: 8
  },
  titleText:{
    color: '#fff'
  },
  resetBtnTouchable:{
    width: 70,
    marginRight: 8
  },
  btnContainer:{
    justifyContent:'center',
  },
  redefinirBtnText:{
    textAlign: 'right',
    color: '#fff'
  }
})