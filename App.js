import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Regform from './app/components/Regform';

export default function App() {
  return (
    <View style={styles.container}>
      <Regform />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingLeft: 60,
    paddingRight: 60,
  },
});
