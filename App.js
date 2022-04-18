import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {ActivityIndicator, FlatList, StyleSheet, Text, View,TouchableOpacity,ScrollView} from 'react-native';
import { useEffect, useState } from "react";
console.reportErrorsAsExceptions = false; // copy paste this line in your App.js 
import MealCard from './components/MealCard.js';
import Header from './components/Header.js';
import axios from 'axios';

const API = {
  ID : "dca71378",
  KEY : "21b6d65e39d07e47179a8d93bc9e604f",
  URL : "https://api.edamam.com/search?",
}

export default function App(){
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const APP_ID = "dca71378";
  const APP_KEY = "21b6d65e39d07e47179a8d93bc9e604f";
  const query = 'chicken';
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const recipeList = [];
  const componentList = [];
  var userMeals = 5;

const getData = async () => {
    const result = await axios(url);
    for (let i = 0; i < userMeals; i++) {
      recipeList.push(result.data.hits[i].recipe);
    }
    return recipeList;
}
 //data.hits[0].recipe.label

 //getData();
  var calories = 2000;
  for (let i = 0; i < userMeals; i++) {
    componentList.push(
    <MealCard
      key={i}
      recipeNumber={`${i + 1}`}
      mealCalories={`${calories/userMeals}`}
    />);
  }
  return (
    <View style={styles.container}>
        <Header/>
        <ScrollView>
          <View style={styles.userTotalInfo}>
            <Text style={styles.headerText}>Recommended Meals of The Day</Text>
            <Text style={styles.caloriesSubheader}>Total Calories: {calories}</Text>
            <Text style={styles.subheaderText}>Total Macros</Text>
            <View style={styles.userMacroInfo}>
              <Text>Protein:</Text>
              <Text>Carbs:</Text>
              <Text>Fat:</Text>
            </View>
          </View>
          {componentList}
        </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userMacroInfo:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText:{
    fontSize:25,
  },
  subheaderText:{
    fontSize:22,
  },
  caloriesSubheader:{
    fontSize:20
  }
});
