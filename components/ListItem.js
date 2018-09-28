import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import SwipeOut from 'react-native-swipeout'

const Delete = (props) => (
  <TouchableOpacity
    style={styles.deleteButton}
    onPress={props.onDelete}
  >
    <Image
      style={styles.deleteImage}
      source={require('../assets/delete.png')}
    />
  </TouchableOpacity>

)

export default (props) => (

  <SwipeOut right={[{component: <Delete onDelete={props.onDelete} />}]} buttonWidth={105}>

    <View style={styles.container}>
      <Image
        style={styles.gem}
        source={require('../assets/gem.png')}
      />
      <Text style={styles.text}>{props.title}</Text>
    </View>

  </SwipeOut>
)

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    borderBottomColor: '#E4E4E4',
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 20
  },
  text: {
    fontSize: 18
  },
  gem: {
    resizeMode: 'contain',
    height: 50,
    marginRight: 20
  },
  deleteButton: {
    flex: 1,
  },
  deleteImage: {
    flex: 1,
    resizeMode: 'contain'
  }
})