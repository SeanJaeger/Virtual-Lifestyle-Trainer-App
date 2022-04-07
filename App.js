// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

//First Example

// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
// } from 'react-native';

// export default class UserProfileView extends Component {

//   render() {
//     return (
//       <View style={styles.container}>
//           <View style={styles.header}>
//             <View style={styles.headerContent}>
//                 <Image style={styles.avatar}
//                   source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>

//                 <Text style={styles.name}>George Bush </Text>
//                 <Text style={styles.userInfo}>georgiepeorgie@mail.com </Text>
//                 <Text style={styles.userInfo}>Florida </Text>
//             </View>
//           </View>

//           <View style={styles.body}>
//             <View style={styles.item}>
//               <View style={styles.iconContent}>
//                 <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/cottage.png'}}/>
//               </View>
//               <View style={styles.infoContent}>
//                 <Text style={styles.info}>Home</Text>
//               </View>
//             </View>

//             <View style={styles.item}>
//               <View style={styles.iconContent}>
//                 <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/administrator-male.png'}}/>
//               </View>
//               <View style={styles.infoContent}>
//                 <Text style={styles.info}>Settings</Text>
//               </View>
//             </View>

//             <View style={styles.item}>
//               <View style={styles.iconContent}>
//                 <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/filled-like.png'}}/>
//               </View>
//               <View style={styles.infoContent}>
//                 <Text style={styles.info}>News</Text>
//               </View>
//             </View>

//             <View style={styles.item}>
//               <View style={styles.iconContent}>
//                 <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/facebook-like.png'}}/>
//               </View>
//               <View style={styles.infoContent}>
//                 <Text style={styles.info}>Shop</Text>
//               </View>
//             </View>

//           </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   header:{
//     backgroundColor: "#DCDCDC",
//   },
//   headerContent:{
//     padding:30,
//     alignItems: 'center',
//   },
//   avatar: {
//     width: 130,
//     height: 130,
//     borderRadius: 63,
//     borderWidth: 4,
//     borderColor: "white",
//     marginBottom:10,
//   },
//   name:{
//     fontSize:22,
//     color:"#000000",
//     fontWeight:'600',
//   },
//   userInfo:{
//     fontSize:16,
//     color:"#778899",
//     fontWeight:'600',
//   },
//   body:{
//     backgroundColor: "#778899",
//     height:500,
//     alignItems:'center',
//   },
//   item:{
//     flexDirection : 'row',
//   },
//   infoContent:{
//     flex:1,
//     alignItems:'flex-start',
//     paddingLeft:5
//   },
//   iconContent:{
//     flex:1,
//     alignItems:'flex-end',
//     paddingRight:5,
//   },
//   icon:{
//     width:30,
//     height:30,
//     marginTop:20,
//   },
//   info:{
//     fontSize:18,
//     marginTop:20,
//     color: "#FFFFFF",
//   }
// });

//Second Example

import * as React from 'react'
import { Icon } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import 'react-native-gesture-handler'
import PropTypes from 'prop-types'

// import Profile1 from './screens/Profile1'
// import Profile2 from './screens/Profile2'
// import Profile3 from './screens/Profile3'
import Setting1 from './screens/Setting1'


import SettingOption1 from './screens/Setting1/Options'

const Setting1Stack = createStackNavigator()
function SettingsStackScreen() {
  return (
    <Setting1Stack.Navigator>
      <Setting1Stack.Screen name="Settings" component={Setting1} />
      <Setting1Stack.Screen name="Options" component={SettingOption1} />
    </Setting1Stack.Navigator>
  )
}


// const Profile1Stack = createStackNavigator()
// function Profile1StackScreen() {
//   return (
//     <Profile1Stack.Navigator
//       screenOptions={{
//         headerShown: false
//       }}
//     >
//       <Profile1Stack.Screen name="Profile" component={Profile1} />
//     </Profile1Stack.Navigator>
//   )
// }

// const Profile2Stack = createStackNavigator()
// function Profile2StackScreen() {
//   return (
//     <Profile2Stack.Navigator
//       screenOptions={{
//         headerShown: false
//       }}
//     >
//       <Profile2Stack.Screen name="Profile" component={Profile2} />
//     </Profile2Stack.Navigator>
//   )
// }

// const Profile3Stack = createStackNavigator()
// function Profile3StackScreen() {
//   return (
//     <Profile3Stack.Navigator
//       screenOptions={{
//         headerShown: false
//       }}
//     >
//       <Profile3Stack.Screen name="Profile" component={Profile3} />
//     </Profile3Stack.Navigator>
//   )
// }
const Tab = createBottomTabNavigator()

const HomeIcon = ({ focused, tintColor }) => (
  <Icon
    name="lens"
    type="material"
    size={26}
    color={focused ? '#adacac' : '#ededed'}
  />
)

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: props => <HomeIcon {...props}/>,
          "tabBarActiveTintColor":"tomato",
          "tabBarInactiveTintColor": "gray",
          "tabBarShowLabel":false,
          "tabBarLabelStyle":{
            "fontSize":12
          },
          "tabBarIconStyle":{
            "width":30,
            "height":30
          },
          "tabBarStyle":{
            "display":"flex"
          },
          
        })}
      >
        {/* <Tab.Screen name="Profile1" component={Profile1StackScreen} /> */}
        {/* <Tab.Screen name="Profile2" component={Profile2StackScreen} /> */}
        {/* <Tab.Screen name="Profile3" component={Profile3StackScreen} /> */}
        {/* <Tab.Screen name="Product1" component={Product1StackScreen} /> */}
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}