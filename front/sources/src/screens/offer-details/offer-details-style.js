import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  scrollview:{
    flex: 1,
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    margin:10,
    flexDirection: 'column',
  },
  footer: {
    flex: 1,
    margin: 2,
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  titleHeader:{
    flex:1,
    padding: 5,
    margin: 2,
    justifyContent: 'flex-end',
  },
  logoHeader:{
    backgroundColor: '#fff',
    margin: 10,
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#f1f1f1',
    borderRadius: 7
  },
  logo: {
    width: 100,
    height: 100,
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
  titleInfo:{
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  description:{
    marginTop:8
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
  action:{
    flex: 1,
    margin: 5,
    borderRadius: 7,
    flexDirection: 'column',
    justifyContent:'center',
    backgroundColor:'#05869b'
  },
  btnAcquire:{
    color: '#fff',
    height: 45,
    alignItems:'center',
    justifyContent:'center',

  },
  btnAcquireText:{
    fontSize: 20,
    color: '#fff'
  },
  infoBody:{
    margin: 10,
    flex:1,
    flexDirection: 'row',
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
})