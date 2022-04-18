import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView } from 'react-native'

import contactData from '../../mocks/contact.json'

import { Nav } from '../../components'
import Meal from './MealTab'

const MealScreen = (props) => {
  props.navigation.setOptions({
    header: ({navigation}) => (
      <SafeAreaView>
        <Nav
          title="Meal Plan"
          navigation={navigation}
          leftIcon={{
            type: 'ionicon',
            name: 'md-list',
            size: 26,
          }}
        />
      </SafeAreaView>
    ),
  })

  return <Meal {...contactData} {...props} />
}

MealScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default MealScreen