import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View,Dimensions,Button,Image } from 'react-native';

const Header = () => {
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Virtual Lifestyle Trainer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        width: "100%",
        height: "10%",
        backgroundColor: '#31A74B',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText:{
        color: 'white',
        fontSize:24,
    }
});
export default Header;
