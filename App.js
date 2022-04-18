import * as React from 'react'
import { Icon } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import 'react-native-gesture-handler'
import PropTypes from 'prop-types'

// import Profile1 from './screens/Profile1'
import Meal from './screens/Meal/Index'
import Setting2 from './screens/Setting2'
import Login from './screens/Login'


import LoginToProfile from './screens/Setting2/Setting2'
import SettingOption2 from './screens/Setting2/Options'

const Setting1Stack = createStackNavigator()
function SettingsStackScreen() {
  return (
    <Setting1Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Setting1Stack.Screen name="Settings" component={Login} />
      <Setting1Stack.Screen name="../Setting2/Setting2" component={LoginToProfile} />
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

const MealStack = createStackNavigator()
function MealStackScreen() {
  return (
    <MealStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <MealStack.Screen name="Meal" component={Meal} />
    </MealStack.Navigator>
  )
}

const Setting2Stack = createStackNavigator()
function Setting2StackScreen() {
  return (
    <Setting2Stack.Navigator
      // screenOptions={{
      //   headerShown: false
      // }}
    >
      <Setting2Stack.Screen name="Settings2" component={Setting2} />
      <Setting1Stack.Screen name="Options" component={SettingOption2} />
    </Setting2Stack.Navigator>
  )
}
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
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
        <Tab.Screen name="Settings2" component={Setting2StackScreen} />
        <Tab.Screen name="Meal" component={MealStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}