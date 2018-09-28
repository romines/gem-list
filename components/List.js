import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ListItem from './ListItem.js'

export default class List extends Component {
  constructor(props) {
    super(props)
    const nums = [1,2,3,4,5,6,7,8,9,10]
    // const nums = [...Array(10).keys()]
    const items = nums.map(num => ({id: num, title: `Example ${num.toString()}`}))
    this.state = {
      items
    }
  }

  _removeItem(id) {
    this.setState({
      items: this.state.items.filter((item) => item.id !== id)
    })

  }

  render() {
    return (
      <ScrollView style={styles.container}>

        {this.state.items.map(({id, title}) => (<ListItem
          onDelete={() => this._removeItem(id)}
          key={id}
          title={title}
        />))}

      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})