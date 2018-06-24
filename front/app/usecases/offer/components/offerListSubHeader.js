import React , { PureComponent } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Button } from 'react-native'


export class OfferListSubHeader extends PureComponent {
  render () {
    const { total, length } = this.props
    return (
      <View style={styles.listSubHeader}>
        <TouchableOpacity onPress={this.props.searchScreen} style={styles.listSubHeaderBtn}>
          <Button title="Filtros" onPress={this.props.searchScreen}></Button>
        </TouchableOpacity>
        <Text style={styles.listSubHeaderItem}>
          {length} de {total} resultados
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listSubHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    maxHeight: 50,
    backgroundColor: '#ffffff'
  },
  listSubHeaderBtn: {
    flex: 0.8,
  },
  listSubHeaderText: {
    flex: 0.2,
  },
});
