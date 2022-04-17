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
} from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "./components/Login";

import { StatusBar } from "expo-status-bar";
import MealCard from "./components/MealCard.js";
import Header from "./components/Header.js";
// import FoodSearch from "./components/FoodSearch";
import { useState } from "react";
import { useEffect } from "react";
import { query } from "react";
import { render } from "react-dom";
import { response } from "express";

const AppNavigator = createStackNavigator({
  Login: { screen: Login },
});

const App = createAppContainer(AppNavigator);
export default App;

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
