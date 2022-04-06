import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View,TouchableOpacity,ScrollView } from 'react-native';
import MealCard from './components/MealCard.js';
import Header from './components/Header.js';

export default function App(){
  /*const APP_ID = "dca71378";
  const APP_KEY = "21b6d65e39d07e47179a8d93bc9e604f";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() =>{
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };*/

  const componentList = [];
  var userMeals = 7;
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
