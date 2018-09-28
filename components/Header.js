import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default ({ screens, activeScreen, navigate }) => {
  const twoCol = activeScreen === 'list'

  return (
    <View style={[styles.header, twoCol && styles.twoColHeader]}>

      { // conditionally show back button
        twoCol &&
        <TouchableOpacity onPress={navigate} style={{ flex: 1 }}>
          <Text style={[styles.title, styles.chevron]}>&#8249;</Text>
        </TouchableOpacity>
      }

      <Text style={[styles.title, twoCol && styles.twoColTitle]}>{screens[activeScreen].title}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#017ACD',
    paddingTop: 28,
    padding: 20,
    paddingBottom: 0,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  twoColHeader: {
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    lineHeight: 60,
    color: 'white',
    fontWeight: '600'
  },
  twoColTitle: {
    flex: 1,
    transform: [{translateX: -50}]
  },
  chevron: {
    fontSize: 60,
  },
})