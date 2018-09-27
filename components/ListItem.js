import React, { Component } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <Text>{this.props.title}</Text>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    height: 54,
    flexDirection: 'row'
  },
  text: {
    fontSize: 18
  },
});