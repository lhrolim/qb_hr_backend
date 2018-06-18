import { StyleSheet } from 'react-native';

const smallMargin = 5;
const normalMargin = 10;
const backgroundColor = '#E5E0DD';
const foregroundColor = '#FFFFFF';
const detailColor = '#8AB0D0';
const universityLogo = { width: 150, height: 50 };
const normalFont = 12;
const largeFont = 15;

export const styles = StyleSheet.create({
  offerList: {
    backgroundColor: backgroundColor,
    paddingTop: smallMargin,
    paddingBottom: smallMargin
  },
  offerListHeader: {
    backgroundColor: foregroundColor,
    paddingLeft: 15 + normalMargin,
    paddingRight: 15 + normalMargin,
    paddingTop: smallMargin,
    paddingBottom: smallMargin,
    alignItems: 'flex-end'
  },
  offerListHeaderText: {
    fontSize: largeFont
  },
  offerCard: {
    backgroundColor: foregroundColor,
    borderRadius: 15,
    borderColor: detailColor,
    borderWidth: StyleSheet.hairlineWidth,
    marginLeft: normalMargin,
    marginRight: normalMargin,
    marginTop: smallMargin,
    marginBottom: smallMargin,
    padding: 15
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
  }
});