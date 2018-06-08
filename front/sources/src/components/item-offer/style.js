import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    backgroundColor: '#fff',
    flexDirection: 'column',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0,  height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    borderRadius: 7
  },
  header: {
    flex: 1,
    margin: 2,
    flexDirection: 'row',
  },
  body: {
    flex: 1,
    flexDirection: 'row',
  },
  footer: {
    flex: 1,
    margin: 2,
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  logoHeader:{
    backgroundColor: '#fff',
    margin: 5,
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: '#f1f1f1',
    borderRadius: 7
  },
  titleHeader:{
    flex:1,
    padding: 5,
    margin: 2,
    justifyContent: 'flex-end',
  },
  titleText:{
    color:'#333333',
    textAlign:'right',
    fontSize: 16,
    fontWeight:'bold',
  },
  subTitleText : {
    textAlign:'right',
    fontWeight:'400',
    fontSize: 14,
  },
  subTitle2Text : {
    textAlign:'right',
    fontWeight:'400',
    fontSize: 14,
  },
  infoBody:{
    margin: 10,
    flex:1,
    flexDirection: 'row',
  },
  accessory:{
    margin: 10,
    alignItems:'center',
    justifyContent:'flex-end',
    flexDirection: 'row',
    width:100,
  },
  viewInfoBody:{
    backgroundColor:'#f1f1f1',
    borderRadius: 5,
    justifyContent: 'center',
    marginRight: 10
  },
  textInfoBody:{
    margin: 5,
    fontSize: 14,
    textAlign:'center',
    fontWeight:'bold',
  },
  infoGeo:{
    justifyContent:'space-evenly',
    flexDirection: 'row',
  },
  infoPrice: {
    margin:10
  },
  offeredPrice: {
    fontWeight:'bold',
    fontSize: 18
  },
  fullPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through'
  },
  highlightPerc: {
    margin:10,
    alignItems: 'center'
  },
  discountPercentage: {
    fontWeight:'bold',
    fontSize: 22,
    color: 'green'
  },
  btnTouchable:{}
})