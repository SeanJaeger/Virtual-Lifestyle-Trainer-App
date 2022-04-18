import React from 'react'
import { SafeAreaView, View, TextInput} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import {Input, CheckBox} from "react-native-elements"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

import { Nav } from '../../components'



const Options = (props) => {
  const [checkedMale, setCheckedMale] = React.useState(false);
  const [checkedFemale, setCheckedFemale] = React.useState(false);
  props.navigation.setOptions({
    header: ({navigation}) => (
      <SafeAreaView>
        <Nav title="Options" navigation={navigation} />
      </SafeAreaView>
      
    ),
    
  })

  return (
    
    <ScrollView>
      <View {...props} />
      <Input
      containerStyle={{}}
      disabledInputStyle={{ background: "#ddd" }}
      inputContainerStyle={{}}
      // errorMessage="Oops! that's not correct."
      errorStyle={{}}
      errorProps={{}}
      inputStyle={{}}
      label="Name"
      labelStyle={{}}
      labelProps={{}}
      leftIcon={<Icon name="account-outline" size={20} />}
      leftIconContainerStyle={{}}
      rightIcon={<Icon name="close" size={20} />}
      rightIconContainerStyle={{}}
      placeholder="Enter Name"
    />


    <Input
      containerStyle={{}}
      disabledInputStyle={{ background: "#ddd" }}
      inputContainerStyle={{}}
      // errorMessage="Oops! that's not correct."
      errorStyle={{}}
      errorProps={{}}
      inputStyle={{}}
      label="Age"
      labelStyle={{}}
      labelProps={{}}
      leftIcon={<Icon name="account-outline" size={20} />}
      leftIconContainerStyle={{}}
      rightIcon={<Icon name="close" size={20} />}
      rightIconContainerStyle={{}}
      placeholder="Enter Age"
    />

    <CheckBox
      checkedMale={checkedMale}
      checkedColor="#0F0"
      checkedTitle="Saved!"
      containerStyle={{ width: "100%" }}
      onIconPress={() => setCheckedMale(!checkedMale)}
      onLongIconPress={() =>
        console.log("onLongIconPress()")
      }
      onLongPress={() => console.log("onLongPress()")}
      onPress={() => console.log("onPress()")}
      size={30}
      textStyle={{}}
      title="Male"
      titleProps={{}}
      uncheckedColor="#F00"
    />

    <CheckBox
      checkedFemale={checkedFemale}
      checkedColor="#0F0"
      checkedTitle="Saved!"
      containerStyle={{ width: "100%" }}
      onIconPress={() => setCheckedFemale(!checkedFemale)}
      onLongIconPress={() =>
        console.log("onLongIconPress()")
      }
      onLongPress={() => console.log("onLongPress()")}
      onPress={() => console.log("onPress()")}
      size={30}
      textStyle={{}}
      title="Female"
      titleProps={{}}
      uncheckedColor="#F00"
    />

    <Input
      containerStyle={{}}
      disabledInputStyle={{ background: "#ddd" }}
      inputContainerStyle={{}}
      // errorMessage="Oops! that's not correct."
      errorStyle={{}}
      errorProps={{}}
      inputStyle={{}}
      label="Weight"
      labelStyle={{}}
      labelProps={{}}
      leftIcon={<Icon name="account-outline" size={20} />}
      leftIconContainerStyle={{}}
      rightIcon={<Icon name="close" size={20} />}
      rightIconContainerStyle={{}}
      placeholder="Enter Weight"
    />

    <Input
      containerStyle={{}}
      disabledInputStyle={{ background: "#ddd" }}
      inputContainerStyle={{}}
      // errorMessage="Oops! that's not correct."
      errorStyle={{}}
      errorProps={{}}
      inputStyle={{}}
      label="Height"
      labelStyle={{}}
      labelProps={{}}
      leftIcon={<Icon name="account-outline" size={20} />}
      leftIconContainerStyle={{}}
      rightIcon={<Icon name="close" size={20} />}
      rightIconContainerStyle={{}}
      placeholder="Enter Height"
    />

    </ScrollView>
    
  
  
  );
}

export default Options