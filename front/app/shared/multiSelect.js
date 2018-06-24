import React , { PureComponent } from 'react'
import { View } from 'react-native'
import MultiSelect from 'react-native-multiple-select';


export class MultiSelectInput extends PureComponent {
  render () {
    const { items, single, selectedItems, selectText, searchInputPlaceholderText } = this.props
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          hideTags
          items={items}
          uniqueKey="id"
          single={false}
          ref={component => { this.multiSelect = component }}
          onSelectedItemsChange={selectedItems => this.props.onSelectedItemsChange(selectedItems)}
          selectedItems={selectedItems}
          selectText={selectText}
          searchInputPlaceholderText={searchInputPlaceholderText}
          displayKey="name"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          searchInputStyle={{ color: '#CCC' }}
          submitButtonColor="#CCC"
          submitButtonText="Submit"
        />
        <View>
          {this.multiSelect && this.multiSelect.getSelectedItemsExt(selectedItems)}
        </View>
      </View>
    );
  }
}
