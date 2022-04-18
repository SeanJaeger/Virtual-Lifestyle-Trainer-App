import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {ActivityIndicator, FlatList, StyleSheet, Text, View,TouchableOpacity,ScrollView} from 'react-native';
import { useEffect, useState } from "react";
console.reportErrorsAsExceptions = false; // copy paste this line in your App.js 
import MealCard from './components/MealCard.js';
import Header from './components/Header.js';
import axios from 'axios';
import data from './data/data.js';
import { Linking } from 'react-native';


const API = {
  ID : "dca71378",
  KEY : "21b6d65e39d07e47179a8d93bc9e604f",
  URL : "https://api.edamam.com/search?",
}

export default function App(){
  const [isLoading, setLoading] = useState(true);
  const [recipe, setRecipes] = useState();
  const APP_ID = "dca71378";
  const APP_KEY = "21b6d65e39d07e47179a8d93bc9e604f";
  const query = 'chicken';
  //const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const recipeList = [];
  const componentList = [];
  var userMeals = 2;

/*const getRecipes = () => {
    axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`).then(
      (response) => {
          setRecipes(response.data.hits[0].recipe);
        });
  };*/
 //data.hits[0].recipe.label

 //getData();
  var calories = 2000;
    componentList.push(
    <MealCard
      key={1}
      recipeNumber={1}
      recipeName={"Chicken Vesuvio"}
      mealImage={"https://static01.nyt.com/images/2019/10/08/dining/ml-chicken-vesuvio-horizontal/ml-chicken-vesuvio-horizontal-articleLarge-v3.jpg"}
      mealLink={"https://www.seriouseats.com/chicken-vesuvio-recipe"}
      mealCalories={`${calories/userMeals}`}
      fat={`68.1g`}
      carbs={`44g`}
      protein={`57.5g`}
    />);
    componentList.push(
      <MealCard
        key={2}
        recipeNumber={2}
        recipeName={"Tandoori Chicken"}
        mealImage={"https://edamam-product-images.s3.amazonaws.com/web-img/639/639fbe714927318ef9f2e228e0a4935c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLWVhc3QtMSJIMEYCIQDAUiu44TFZaYkHAaTlsqWOG7hu2EzldgUtc%2BSIib5j6gIhAPiplPsXGo8AFJkQ18QPYCPY3YydaYMn3kUR1zFzo82KKoMECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgyZJheT4aNtZAWcPzQq1wO%2BIfMhwVyYMdA2BBtsst1BLCjKUWF7RHbExfbqOfnB8hxrzmHRDGBTRfpeVzIrnhXCkX6KmMDQ1%2B2ARHy%2BmUQE5jQ7%2FWGyt8jVf62XI4XgjJnwSJ9ir7bCrIofFiauAVWTfVJv1Lo0bjunkFA2fpeSDc0SBJenDiTuduxxo1Fns0Vtz75dSEJpiruh05i3d6QgSSIEShwwX10ot5W434TBtMb%2BJa2J6r8sbw%2FjbfvnalFYJp31eIqJ8x6fzx1YLyGrGCwu%2Bu4fJNaLWawc8OEOx5juUUCq3jQs8iwx%2FhSsunuJR003QdKu8UFOTqlrdNriQdVDTVTtPZFozsG2COV%2Bk8%2B5bbVL5jyIfdBGya%2F6ugQ0p6Iihnxe%2FCF3Jhh2qb%2FZwM83%2FRPOExcnwzCJBxoflm%2BmfbJyCz2fAanBh%2BszBCR72wN%2BwY51nDYy6%2F2WUYuVng49Uz9eyIAqjk5SXDz8TjiSkKYkmtkKXn3HpEXpEX3Ggal56zVC0DsnusM8NLk6jIZ3Sng1nhQgyG%2FGz2VWthrryfS2eWW1ItDT81UhloH8Dr25z1rIHoSCTFcc%2FK1KD1rRCAjT27Dl%2Bxgs26JsEEzXwM7LCVsnppeb6FoIk0snpq6fieMw%2F5TzkgY6pAEBg3fL8PuIpp7sKRZ7KdNt%2BTCWPyOmTkGaSIx8rb5r5UD%2FTl7ni4wLQuH5yeOd9yWQVIsRmTt%2BE%2FlTlqB%2BDl8B%2F3Kgi8kiSmspyCRnUzZRHkwugBFO2o6t0qOp%2BBa6tcsuXp6PI9kz8s%2Btd2uEyZLO6eXsn5L75ff5GRzHNxVoHoYSmODtL%2Bv5Bj%2BohfpuDd2H10JSdoIdQDWD4oPOuRTyPi2b6g%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220418T024850Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMBKGZ7PB%2F20220418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5297149779aebd5228650566899d59155c10e72fd4a107917170fd8a008370ce"}
        mealLink={"http://www.davidlebovitz.com/2009/03/tandoori-chicken/"}
        mealCalories={`${calories/userMeals}`}
        fat={`65.25g`}
        carbs={`19.62g`}
        protein={`80.25g`}
      />);

      

  return (
    <View style={styles.container}>
        <Header/>
        <ScrollView>
          <View style={styles.userTotalInfo}>
            <Text style={styles.headerText}>Recommended Meals of The Day</Text>
            <Text style={styles.caloriesSubheader}>Total Calories: {calories}</Text>
            <Text style={styles.subheaderText}>Total Macros</Text>
            <View style={styles.userMacroInfo}>
              <Text>Protein: 137.75g</Text>
              <Text>Carbs: 63.62g</Text>
              <Text>Fat: 133.35g</Text>
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
