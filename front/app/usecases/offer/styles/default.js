import { Platform, StyleSheet, PixelRatio } from 'react-native';

let smallSpacing = 5;
let normalSpacing = 10;
let largeSpacing = 22;
let normalColor = '#000000';
let mainColor = '#00879B';
let backgroundColor = '#DCDADB';
let foregroundColor = '#FFFFFF';
let detailColor = '#EAEBED';
let successColor = '#03AC13';
let disabledColor = '#969C9C';
let normalFont = 14;
let largeFont = 18;
let largerFont = 20;
let hugeFont = 22;
let defaultBorderRadius = 4;

let buttonStyle = {
  borderRadius: 100,
  backgroundColor: mainColor,
  paddingLeft: largeSpacing,
  paddingRight: largeSpacing,
  paddingTop: normalSpacing,
  paddingBottom: normalSpacing,
  marginTop: normalSpacing,
  alignSelf: 'stretch',
  elevation: 5
};

const stylesheet = {
  // Offer List Styles
  offerListBackground: {
    flex: 1,
    backgroundColor: backgroundColor
  },
  offerList: {
    backgroundColor: backgroundColor
  },
  offerListHeader: {
    margin: normalSpacing,
    borderRadius: 20,
    backgroundColor: detailColor,
    padding: 15 + normalSpacing,
    paddingVertical: 10 + normalSpacing,
    marginBottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  offerListHeaderText: {
    fontSize: largeFont
  },
  filterArrow: {
    fontSize: largeFont,
    flexDirection: 'column',
    alignSelf: 'flex-end',
    marginLeft: -3,
    paddingTop: 4,
  },
  offerCard: {
    backgroundColor: foregroundColor,
    borderRadius: 50,
    borderColor: detailColor,
    borderWidth: StyleSheet.hairlineWidth,
    margin: normalSpacing,
    padding: largeSpacing,
    elevation: 5,
    flexDirection: 'row'
  },
  offerCardHeader: {
    flex: 1,
    flexDirection: 'row'
  },
  universityLogo: {},
  universityName: {
    flex: 1,
    fontSize: largerFont,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center'
  },
  offerCardBody: {
    paddingVertical: normalSpacing,
    flexDirection: 'column'
  },
  offerCardFooter: {
    flex: 1,
    paddingTop: normalSpacing,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  offerCardContent: {
    flex: 9
  },
  offerCardArrow: {
    flex: 1,
    marginRight: -10,
    justifyContent: 'center'
  },
  offerCardArrowIcon: {
    color: mainColor,
    fontSize: 40
  },
  offerCardInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  offerCardText: {
    paddingTop: smallSpacing,
    paddingRight: largeSpacing,
    fontSize: normalFont
  },
  courseName: {
    fontSize: hugeFont,
    fontWeight: 'bold',
    textAlign: 'left',
    color: mainColor
  },
  offerDiscount: {
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  offerDiscountNumber: {
    fontSize: hugeFont * 2,
    height: hugeFont * 2,
    lineHeight: hugeFont * 2.2,
    alignSelf: 'flex-end'
  },
  offerDiscountText: {
    fontSize: normalFont,
    lineHeight: normalFont,
    alignSelf: 'center'
  },
  offerPrices: {
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  offerDiscountPrice: {
    fontSize: hugeFont,
    fontWeight: 'bold',
    color: mainColor,
    textAlign: 'right'
  },
  offerPrice: {
    fontSize: normalFont,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: disabledColor,
    textAlign: 'right',
    lineHeight: normalFont
  },
  // Offer Details Styles
  offerDetail: {
    backgroundColor: backgroundColor,
    paddingTop: smallSpacing,
    paddingLeft: normalSpacing,
    paddingRight: normalSpacing,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent: {
    backgroundColor: foregroundColor,
    padding: largeSpacing,
    justifyContent: 'center',
    alignItems: 'stretch',
    borderRadius: defaultBorderRadius,
    borderColor: detailColor
  },
  detailScroll: {
    marginBottom: -30,
    paddingTop: normalSpacing,
    paddingLeft: normalSpacing,
    paddingRight: normalSpacing
  },
  detailScrollContainer: { paddingBottom: 45 },
  detailOverlay: {
    alignSelf: 'stretch',
    backgroundColor: foregroundColor,
    borderTopEndRadius: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderTopStartRadius: 50,
    paddingLeft: normalSpacing,
    paddingRight: normalSpacing,
    paddingTop: largeSpacing,
    paddingBottom: 15
  },
  detailPriceContainer: {
    paddingLeft: largeSpacing,
    paddingRight: largeSpacing,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  courseInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: largeSpacing
  },
  rulesAndInfos: {
    borderRadius: 20,
    backgroundColor: detailColor,
    alignItems: 'center',
    padding: smallSpacing,
    marginTop: normalSpacing
  },
  courseDescriptionContainer: {
    alignItems: 'stretch',
    flexDirection: 'column',
    marginTop: normalSpacing
  },
  // Offer Search
  offerSearch: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: backgroundColor,
    paddingTop: smallSpacing,
    paddingBottom: smallSpacing,
    paddingLeft: normalSpacing,
    paddingRight: normalSpacing
  },
  selectModalBackdrop: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectModalContent: {
    backgroundColor: foregroundColor,
    padding: largeSpacing,
    justifyContent: 'center',
    alignItems: 'stretch',
    borderRadius: defaultBorderRadius,
    borderColor: detailColor,
    flex: 0,
    height: 'auto'
  },
  selectModalScrollView: {
    flex: 0,
    height: 'auto'
  },
  selectItemText: {
    fontSize: largerFont,
    fontWeight: 'bold'
  },
  selectsubItemText: {
    fontSize: largeFont,
    borderBottomColor: detailColor,
    borderBottomWidth: 10,
  },
  // General Styles
  text: {
    fontSize: normalFont,
    textAlign: Platform.OS == 'android' ? 'center' : 'justify'
  },
  textLarge: {
    fontSize: largeFont,
    fontWeight: 'bold',
    paddingTop: smallSpacing,
    paddingBottom: smallSpacing
  },
  button: buttonStyle,
  successButton: {
    ...buttonStyle,
    backgroundColor: successColor
  },
  disabledButton: {
    ...buttonStyle,
    backgroundColor: disabledColor,
    elevation: 0
  },
  buttonText: {
    fontSize: normalFont,
    color: '#FFFFFF',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  offerButtonText: {
    fontSize: hugeFont,
    color: '#FFFFFF',
    alignSelf: 'center'
  },
  roundImageContainer: {
    backgroundColor: '#FFF',
    borderRadius: 50,
    padding: 22,
    paddingVertical: 15,
    flex: 1
  },
  highlightColor: {
    color: mainColor
  },
  normalColor: {
    color: normalColor
  }
};

export const styles = StyleSheet.create(stylesheet);