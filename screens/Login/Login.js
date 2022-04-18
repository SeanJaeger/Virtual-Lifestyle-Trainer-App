import React, { Component } from 'react'
import { ScrollView, Switch, StyleSheet, Text, View } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'
import PropTypes from 'prop-types'

import { 
  TextInput, 
  TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
  regform: {
    alignSelf: 'stretch',

},
header: {
    fontSize: 24,
    color: '#30D5C8',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
},
textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#fff',
    borderBottomColor: '#30D5C8',
    borderBottomWidth: 1,
},
button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 30,
},
btntext: {
    color: '#fff',
    fontWeight: 'bold',
}
})

class SettingsScreen extends Component {
  

  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  onPressSetting = () => {
    this.props.navigation.navigate('../Setting2/Setting2')
  }

  render() {
    // const { avatar, name, emails: [firstEmail] } = this.props
    return (
      <View style={styles.regform}>
      <Text style={styles.header}>Virtual Lifestyle Trainer</Text>

      <TextInput style={styles.textinput} placeholder="Email" 
      underlineColorAndroid={'transparent'} />

      <TextInput style={styles.textinput} placeholder="Password" 
      secureTextEntry={true} 
      underlineColorAndroid={'transparent'}/>


      <TouchableOpacity style={styles.button} onPress={() => this.onPressSetting()}>
          <Text style={styles.btntext}>Log In</Text>
      </TouchableOpacity>
      </View>
    )
  }
}

export default SettingsScreen