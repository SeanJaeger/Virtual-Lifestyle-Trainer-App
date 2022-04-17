import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Form,
  Input,
  TextInput,
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
  KeyboardAvoidingView,
} from "react-native";
import { reportLogBoxError } from "react-native/Libraries/LogBox/Data/LogBoxData";
import { StackNavigator } from "react-navigation";
import { useState } from "react";
import { useEffect } from "react";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  componentDidMount() {
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem("user");
    if (value !== null) {
      this.props.navigation.navigate("Profile");
    }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.header}>- Login -</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            onChangeText={(username) => this.setState}
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            onChangeText={(password) => this.setState}
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity style={styles.btn} onPress={this.login}>
            <Text>Login</Text>
          </TouchableOpacity>
          {logins ? logins : "There is no Login data available"}
        </View>
      </KeyboardAvoidingView>
    );
  }

  login = () => {
    getLogin();
  };
} //End of Login

const [logins, setLogins] = useState(false);
useEffect(() => {
  getLogin();
}, []);

function getLogin() {
  fetch("https://localhost:3300")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      setLogins(data);
    });
}

function insertIntoLogin() {
  let userName = prompt("Enter Username");
  let email = prompt("Enter Email");
  let password = prompt("Enter Password");
  fetch("http:localhost:3300/insertLogin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userName, email, password }),
  })
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      alert(data);
      getLogin();
    });
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2896d3",
    paddingLeft: 40,
    paddingRight: 40,
  },
  header: {
    fontSize: 24,
    marginBottom: 60,
    color: "#fff",
    fontWeight: "bold",
  },
  textInput: {
    alignSelf: "stretch",
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  btn: {
    alignSelf: "stretch",
    backgroundColor: "#01c853",
    padding: 10,
    alignItems: "center",
  },
});
