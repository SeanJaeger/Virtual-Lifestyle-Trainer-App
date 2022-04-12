// import React from "react";
// import { StatusBar } from "expo-status-bar";
// import {
//   FlatList,
//   StyleSheet,
//   Text,
//   View,
//   Dimensions,
//   Button,
//   Image,
//   TouchableOpacity,
// } from "react-native";

// const FoodSearch = (props) => {
//   return (
//     <View style={styles.FoodSearchContainer}>
//       <TouchableOpacity>
//         <View>
//           <form onSubmit={onSubmit}>
//             <input
//               type="text"
//               placeholder="Search for Food"
//               value={props.FoodSearchQuery}
//             ></input>
//           </form>
//         </View>
//         <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
//           <TouchableOpacity style={styles.mealButtonStyle}>
//             <Text style={{ fontSize: 9 }}>Add to Eaten Today</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.mealButtonStyle}>
//             <Text style={{ fontSize: 9 }}>Recommend Another Meal</Text>
//           </TouchableOpacity>
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const deviceWidth = Math.round(Dimensions.get("window").width);
// const deviceHeight = Math.round(Dimensions.get("window").height);
// const styles = StyleSheet.create({
//   FoodSearchContainer: {
//     width: deviceWidth / 1.103,
//     height: deviceHeight / 3.5,
//     backgroundColor: "#ededed",
//     borderRadius: 20,
//     shadowColor: "#000",
//     shadowOffset: {
//       height: 5,
//       width: 5,
//     },
//     shadowOpacity: 0.2,
//     elevation: 10,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   imageStyle: {
//     height: deviceHeight - deviceHeight / 1.2,
//     width: deviceWidth / 1.13,
//     borderRadius: 20,
//   },
//   mealButtonStyle: {
//     height: deviceHeight / 25,
//     backgroundColor: "skyblue",
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 20,
//   },
// });
// export default FoodSearch;
