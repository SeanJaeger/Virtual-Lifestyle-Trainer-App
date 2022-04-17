import * as React from "react";
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
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";

import { StatusBar } from "expo-status-bar";
import MealCard from "./components/MealCard.js";
import Header from "./components/Header.js";
// import FoodSearch from "./components/FoodSearch";
import { useState } from "react";
import { useEffect } from "react";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// const AppNavigator = createStackNavigator(
//   {
//     // Header: { screen: Header },
//     Login: { screen: Login },
//   },
//   {
//     navigationOptions: {
//       header: false,
//     },
//   }
// );

// export default class App extends React.Component {
//   render() {
//     return <AppNavigator />;
//   }
// }

// const App = createAppContainer(AppNavigator);
// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   userMacroInfo: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   headerText: {
//     fontSize: 25,
//   },
//   subheaderText: {
//     fontSize: 22,
//   },
//   caloriesSubheader: {
//     fontSize: 20,
//   },
// });
