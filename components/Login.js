import React, { Component } from "react";
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
  // AsyncStorage,
  KeyboardAvoidingView,
} from "react-native";
import { StackNavigator } from "react-navigation";
import { useState } from "react";
import { useEffect } from "react";

// export default class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//     };
//   }

const Login = ({ navigation }) => {
  // render() {
  return (
    // <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
    <KeyboardAvoidingView behavior="padding">
      {/* <View style={styles.container}> */}
      <View>
        {/* <Text style={styles.header}>- Login -</Text> */}
        <Text>- Login -</Text>
        <Form onSubmitForm={onSubmitForm}>
          <TextInput
            // style={styles.textInput}
            placeholder="Email"
            // onChangeText={(email) => this.setState}
            // underlineColorAndroid="transparent"
          />
          <TextInput
            // style={styles.textInput}
            placeholder="Password"
            // onChangeText={(password) => this.setState}
            // underlineColorAndroid="transparent"
          />
          {/* <TouchableOpacity style={styles.btn} onPress={this.login}> */}
          <TouchableOpacity onPress={this.login}>
            <Text>Login</Text>
          </TouchableOpacity>
          {/* {logins ? logins : "There is no Login data available"} */}
        </Form>
      </View>
    </KeyboardAvoidingView>
  );
};
// }

// login = () => {
//   getLogin();
// };
// } //End of Login

const onSubmitForm = async (e) => {
  // e.preventDefault();
  try {
    const body = { email, password };
    const response = await fetch("http://localhost:19006/getLogins", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    console.log(response);
  } catch (err) {
    console.error(err.message);
  }
};

// const [logins, setLogins] = useState(false);
// useEffect(() => {
//   getLogin();
// }, []);

// function getLogin() {
//   fetch("https://localhost:3300")
//     .then((response) => {
//       return response.text();
//     })
//     .then((data) => {
//       setLogins(data);
//     });
// }

// function insertIntoLogin() {
//   let userName = prompt("Enter Username");
//   let email = prompt("Enter Email");
//   let password = prompt("Enter Password");
//   fetch("http:localhost:3300/insertLogin", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ userName, email, password }),
//   })
//     .then((response) => {
//       return response.text();
//     })
//     .then((data) => {
//       alert(data);
//       getLogin();
//     });
// }

// const styles = StyleSheet.create({
//   wrapper: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#2896d3",
//     paddingLeft: 40,
//     paddingRight: 40,
//   },
//   header: {
//     fontSize: 24,
//     marginBottom: 60,
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   textInput: {
//     alignSelf: "stretch",
//     padding: 10,
//     marginBottom: 20,
//     backgroundColor: "#fff",
//   },
//   btn: {
//     alignSelf: "stretch",
//     backgroundColor: "#01c853",
//     padding: 10,
//     alignItems: "center",
//   },
// });
