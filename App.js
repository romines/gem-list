import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Login from './components/Login.js'
import List from './components/List.js'
import Header from './components/Header.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      screen: 'login'
    }
    this._navigate = this._navigate.bind(this)
  }

  _navigate () {
    this.setState({screen: this.state.screen === 'login' ? 'list' : 'login'})
  }

  render() {
    const screens = {
      login: {
        component: <Login onSuccessfulLogin={this._navigate}/>,
        title: 'Welcome'
      },
      list: {
        component: <List />,
        title: 'List View'
      }
    }
    return (
      <View style={styles.container}>
        <Header navigate={this._navigate} screens={screens} activeScreen={this.state.screen} />
        <View style={{flex: 9}}>
          {screens[this.state.screen].component}
        </View>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    // alignItems: 'center',
    justifyContent: 'center',
  },
})
