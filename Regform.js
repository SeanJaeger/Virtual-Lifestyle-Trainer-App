import { StatusBar } from 'expo-status-bar';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity } from 'react-native';

export default function Regform() {
  return (
    <View style={styles.regform}>
      <Text style={styles.header}>Virtual Lifestyle Trainer</Text>

      <TextInput style={styles.textinput} placeholder="Email" 
      underlineColorAndroid={'transparent'} />

      <TextInput style={styles.textinput} placeholder="Password" 
      secureTextEntry={true} 
      underlineColorAndroid={'transparent'}/>


    <TouchableOpacity style={styles.button}>
        <Text style={styles.btntext}>Log In</Text>
    </TouchableOpacity>
    </View>
  );
}


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
});