import { Platform, StyleSheet, PixelRatio } from 'react-native';

let smallSpacing = 5;
let normalSpacing = 10;
let largeSpacing = 22;
let backgroundColor = '#E5E0DD';
let foregroundColor = '#FFFFFF';
let detailColor = '#8AB0D0';
let buttonColor = '#5600E8';
let successColor = '#03AC13';
let disabledColor = '#CCCCCC';
let universityLogo = { width: 150, height: 50 };
let normalFont = 14;
let largeFont = 18;
let largerFont = 20;
let defaultBorderRadius = 4;

let buttonStyle = {
  borderRadius: defaultBorderRadius,
  backgroundColor: buttonColor,
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
  offerList: {
    backgroundColor: backgroundColor,
    paddingTop: smallSpacing,
    paddingBottom: smallSpacing
  },
  offerListHeader: {
    backgroundColor: foregroundColor,
    paddingLeft: 15 + normalSpacing,
    paddingRight: 15 + normalSpacing,
    paddingTop: smallSpacing,
    paddingBottom: smallSpacing,
    alignItems: 'flex-end'
  },
  offerListHeaderText: {
    fontSize: largeFont
  },
  offerCard: {
    backgroundColor: foregroundColor,
    borderRadius: defaultBorderRadius,
    borderColor: detailColor,
    borderWidth: StyleSheet.hairlineWidth,
    marginLeft: normalSpacing,
    marginRight: normalSpacing,
    marginTop: smallSpacing,
    marginBottom: smallSpacing,
    padding: largeSpacing
  },
  universityLogo: {
    flex: 1,
    width: universityLogo.width,
    height: universityLogo.height
  },
  strikeThrough: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: 'red'
  },
  // Offer Details Styles
  offerDetail: {
    backgroundColor: backgroundColor,
    paddingTop: smallSpacing,
    paddingBottom: smallSpacing,
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
  }
};

export const styles = StyleSheet.create(stylesheet);