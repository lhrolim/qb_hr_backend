import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
  offerList: {
    backgroundColor: '#E5E0DD',
    paddingTop: 5,
    paddingBottom: 5
  },
  offerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    borderColor: '#8AB0D0',
    borderWidth: StyleSheet.hairlineWidth,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    padding: 15
  },
  universityLogo: {
    flex: 1,
    width: 150,
    height: 50
  },
  strikeThrough: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: 'red'
  }
});