import React , { PureComponent } from 'react'
import { Text, View, TouchableOpacity, Button, StyleSheet, Dimensions } from 'react-native'
let { width, height } = Dimensions.get('window')

export class TuitionModal extends PureComponent {
  render () {
    return (
      <View style={styles.modal}>
        <View style={styles.content}>
          <Text>Perfeito!</Text>
          <Text>Dentro de alguns instantes entraremos em contato para confirmar sua bolsa ; )</Text>
        </View>
        <TouchableOpacity style={styles.modalBtn} onPress={this.props.triggerModal}>
          <Button title="Fechar" onPress={this.props.triggerModal}></Button>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    padding: 20,
    maxHeight: 200,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    maxWidth: width - 20,
  },
  content: {
    flex: 1,
  },
  modalBtn: {
    flex: 1,
    width: width - 60
  },
});
