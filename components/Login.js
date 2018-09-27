import React, { Component } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loginError: false
    };
    this._onLoginPress = this._onLoginPress.bind(this);
    this._toggleLoginError = this._toggleLoginError.bind(this);

  }

  get formValid () {
    const re = new RegExp('^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{8,}$')
    return re.test(this.state.password)
  }

  _toggleLoginError() {
    this.setState(({ loginError }) => ({ loginError: !loginError}))
  }
  _onLoginPress() {

    if (this.formValid) {
      this.props.onSuccessfulLogin()
    } else {
      this._toggleLoginError()
      setTimeout(this._toggleLoginError, 4500);
    }

  }

  render() {
    const formValid = this.formValid
    return (
      <View style={styles.container}>

        <View style={styles.form}>

          { this.state.loginError &&
            <View>
              <Text>Password Requirements:</Text>
              <Text style={styles.inValidForm}>1. Must be more than 8 characters</Text>
              <Text style={styles.inValidForm}>2. Must contain at least 1 upper case letter</Text>
              <Text style={styles.inValidForm}>3. Must contain at least 1 special character</Text>
            </View>
          }
          <TextInput
            style={[styles.text, styles.input]}
            placeholder="Username"
            placeholderTextColor="black"
            onChangeText={(username) => this.setState({username})}
          />
          <TextInput
            style={[styles.text, styles.input]}
            placeholder="Password"
            placeholderTextColor="black"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={this._onLoginPress}
            title="Login"
          >
            <Text style={[styles.text, {color: "white", fontWeight: "600"}]}>Login</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 40
  },
  text: {
    fontSize: 18
  },
  form: {
    flex: 2,
    justifyContent: 'center'
  },
  inValidForm: {
    color: 'red'
  },
  input: {
    height: 54,
    borderColor: '#E4E4E4',
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 5,
    justifyContent: 'center'
  },
  button: {
    padding: 20,
    backgroundColor: '#017ACD',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});