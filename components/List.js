import React, { Component } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ListItem from './ListItem.js'

export default class Login extends Component {
  constructor(props) {
    super(props);
    const items = [1,2,3,4].map(num => ({key: num, title: `Example ${num}`}))
    this.state = {
      items
    };
  }

  render() {
    return (
      <View style={styles.container}>

        {this.state.items.map(({key, title}) => <ListItem key={key} title={title} />)}

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 40
  }
});