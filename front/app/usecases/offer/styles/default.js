import { Platform, StyleSheet } from 'react-native';

let smallSpacing = 5;
let normalSpacing = 10;
let largeSpacing = 22;
let backgroundColor = '#E5E0DD';
let foregroundColor = '#FFFFFF';
let detailColor = '#8AB0D0';
let buttonColor = '#5600E8';
let successColor = '#03AC13';
let universityLogo = { width: 150, height: 50 };
let normalFont = 14;
let largeFont = 18;
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
    alignItems: 'center',
    borderRadius: defaultBorderRadius,
    borderColor: detailColor
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
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    alignSelf: 'center'
  }
};

export const styles = StyleSheet.create(stylesheet);