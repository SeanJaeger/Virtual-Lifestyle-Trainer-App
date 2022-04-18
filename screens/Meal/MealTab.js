import React, {Component} from 'react'
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    StatusBar
} from "react-native";
console.reportErrorsAsExceptions = false;
import MealCard from "./MealCard";

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
      marginTop:15
    },
    headerText:{
      fontSize:25,
    },
    subheaderText:{
      fontSize:22,
      marginTop: 15
    },
    caloriesSubheader:{
      fontSize:20,
      marginTop: 15
    },
    testing:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:15
    }
})


const componentList = [];
var userMeals = 2;

var calories = 2000;
componentList.push(
<MealCard
    key={1}
    recipeNumber={1}
    recipeName={"Chicken Vesuvio"}
    mealImage={
    "https://static01.nyt.com/images/2019/10/08/dining/ml-chicken-vesuvio-horizontal/ml-chicken-vesuvio-horizontal-articleLarge-v3.jpg"
    }
    mealLink={"https://www.seriouseats.com/chicken-vesuvio-recipe"}
    mealCalories={`${calories / userMeals}`}
    fat={`68.1g`}
    carbs={`44g`}
    protein={`57.5g`}
/>
);
componentList.push(
<MealCard
  style={styles.testing}
    key={2}
    recipeNumber={2}
    recipeName={"Tandoori Chicken"}
    mealImage={
    "https://www.davidlebovitz.com/wp-content/uploads/2009/03/3395117095_ff80c4d1f7_o-1.jpg"
    }
    mealLink={"http://www.davidlebovitz.com/2009/03/tandoori-chicken/"}
    mealCalories={`${calories / userMeals}`}
    fat={`65.25g`}
    carbs={`19.62g`}
    protein={`80.25g`}
/>
);

class MealPlanScreen extends Component{


    render(){
        return(
            <View style={styles.container}>
            {/* <Header /> */}
            <ScrollView>
                <View style={styles.userTotalInfo}>
                <Text style={styles.headerText}>Recommended Meals of The Day</Text>
                <Text style={styles.caloriesSubheader}>
                    Total Calories: {calories}
                </Text>
                <Text style={styles.subheaderText}>Total Macros</Text>
                <View style={styles.userMacroInfo}>
                    <Text>Protein: 137.75g</Text>
                    <Text>Carbs: 63.62g</Text>
                    <Text>Fat: 133.35g</Text>
                </View>
                </View>
                <View style={styles.testing}>{componentList}</View>
            </ScrollView>
            <StatusBar style="auto" />
            </View>
        )
    }
}



export default MealPlanScreen