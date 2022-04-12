import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Form,
  Input,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import MealCard from "./components/MealCard.js";
import Header from "./components/Header.js";
// import FoodSearch from "./components/FoodSearch";
import { useState } from "react";
import { useEffect } from "react";
import { query } from "react";

export default function App() {
  const APP_ID = "dca71378";
  const APP_KEY = "21b6d65e39d07e47179a8d93bc9e604f";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    getRecipes();
  }, [query]);

  const url = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getRecipes = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits.recipe.image);
  };

  const componentList = [];
  var userMeals = 7;
  var calories = 2000;

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  // componentList.push(<FoodSearch FoodSearchQuery={"query"} />);

  for (let i = 0; i < userMeals; i++) {
    componentList.push(
      <MealCard
        key={i}
        // mealImage={`${data.hits.recipe.image}`}
        recipeNumber={`${i + 1}`}
        mealCalories={`${calories / userMeals}`}
      />
    );
  }

  const [text, onChangeText] = React.useState("Useless Text");
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.userTotalInfo}>
          <Text style={styles.headerText}>Recommended Meals of The Day</Text>
          <Text style={styles.caloriesSubheader}>
            Total Calories: {calories}
          </Text>
          <Text style={styles.subheaderText}>Total Macros</Text>
          <View style={styles.userMacroInfo}>
            <Text>Protein:</Text>
            <Text>Carbs:</Text>
            <Text>Fat:</Text>
          </View>
        </View>

        <SafeAreaView>
          {/* <Form onSubmit={onSubmit}> */}
          <TextInput
            type="text"
            placeholder="Search for a Food"
            autoComplete="Off"
            onChangeText={onChangeText}
            value={query}
          />
          {/* <Input type="submit" value="Get Recipe"></Input> */}
          {/* </Form> */}
        </SafeAreaView>

        {componentList}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  userMacroInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 25,
  },
  subheaderText: {
    fontSize: 22,
  },
  caloriesSubheader: {
    fontSize: 20,
  },
});
