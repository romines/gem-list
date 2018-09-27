import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Login from './components/Login.js';
import List from './components/List.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'list'
    };
    this._navigate = this._navigate.bind(this);
  }

  _navigate () {
    this.setState({screen: this.state.screen === 'login' ? 'list' : 'login'});
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
        <View style={styles.header}>
          <TouchableOpacity onPress={this._navigate}>
            <Text style={[styles.title, styles.chevron]}>&#8249;</Text>
          </TouchableOpacity>
          <Text style={styles.title}>{screens[this.state.screen].title}</Text>
          <Text style={[styles.chevron, {color: '#017ACD'}]}>&#8249;</Text>
        </View>
        <View style={{flex: 9}}>
          {screens[this.state.screen].component}
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    // alignItems: 'center',
    justifyContent: 'center',
  },
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
