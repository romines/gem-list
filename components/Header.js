import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SwipeOut from 'react-native-swipeout';

export default Header = (props) => (
  <View style={styles.header}>

    {
      props.activeScreen === 'list' &&
      <TouchableOpacity onPress={props.navigate}>
        <Text style={[styles.title, styles.chevron]}>&#8249;</Text>
      </TouchableOpacity>
    }
    <Text style={styles.title}>{props.screens[props.activeScreen].title}</Text>
    {
      /* placeholder for easy flexbox layout */
      props.activeScreen === 'list' &&
      <TouchableOpacity>
        <Text style={[styles.chevron, {color: '#017ACD'}]}>&#8249;</Text>
      </TouchableOpacity>
    }
  </View>

);

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#017ACD',
    paddingTop: 28,
    padding: 20,
    paddingBottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    lineHeight: 60,
    color: 'white',
    fontWeight: '600'
  },
  chevron: {
    fontSize: 60,
  },
});