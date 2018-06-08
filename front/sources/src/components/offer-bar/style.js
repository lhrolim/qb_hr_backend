import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 45,
    marginBottom: 1,
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0,  height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    borderBottomColor: '#f1f1f1',
    borderBottomWidth: .5
  },
  btnTouchable: {
    marginLeft: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor:'#fff',
    width: 35,
    height: 35,
    borderRadius: 5,
    paddingLeft: 5,
  }, 
  btnText: {
    flexDirection: 'row',
    color: '#333333',
    marginLeft: 8
  },
  pageContent:{
    marginRight:10,
    flexDirection: 'row',
  }
  
})