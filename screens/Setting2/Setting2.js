import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import PropTypes from 'prop-types'

import { Avatar, Icon, ListItem } from 'react-native-elements';
import { FlatList, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import InfoText from '../Login/InfoText';

export default class UserProfileView extends Component {

    static propTypes = {
        navigation: PropTypes.object.isRequired
    }


    onPressSetting = () => {
        this.props.navigation.navigate('Options')
    }

    render() {
        return (
            <ScrollView style={styles.scroll}>


                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={styles.headerContent}>
                            <Image style={styles.avatar}
                            source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>

                            <View style={styles.headerInfo}>
                                <Text style={styles.name}>George Bush </Text>
                                <Text style={styles.userInfo}>georgiepeorgie@mail.com </Text>
                            </View>
                            
                        </View>
                    </View>

                    {/* <View style={styles.body}> */}
                        <InfoText text="Plans"/>

                        <ListItem
                            // Component={TouchableHighlight}
                            containerStyle={{}}
                            disabledStyle={{ opacity: 0.5 }}
                            // onPress={() => this.onPressSetting()}
                            pad={20}
                            style={styles.list}
                            bottomDivider={true}
                            // chevron={}
                        >
                            <Icon
                                name='restaurant'
                            />
                            <ListItem.Content>
                                <ListItem.Title>
                                    <Text>Meal Plan</Text>
                                </ListItem.Title>
                                <ListItem.Subtitle>
                                    <Text>React Native Elements</Text>
                                </ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>

                        <ListItem
                            // Component={TouchableHighlight}
                            containerStyle={{}}
                            disabledStyle={{ opacity: 0.5 }}
                            // onPress={() => this.onPressSetting()}
                            pad={20}
                            style={styles.list}
                            bottomDivider={true}
                        >
                            <Icon
                                name='fa-dumbbell'
                                type='font-awesome'
                            />
                            <ListItem.Content>
                                <ListItem.Title>
                                    <Text>Workout Plan</Text>
                                </ListItem.Title>
                                <ListItem.Subtitle>
                                    <Text>React Native Elements</Text>
                                </ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>

                        <InfoText text="Profile"/>

                        <ListItem
                            // Component={TouchableHighlight}
                            containerStyle={{}}
                            disabledStyle={{ opacity: 0.5 }}
                            onPress={() => this.onPressSetting()}
                            pad={20}
                            style={styles.list}
                            bottomDivider={true}
                        >
                        <Icon
                            name='person'
                        />
                        <ListItem.Content>
                            <ListItem.Title>
                                <Text>Name</Text>
                            </ListItem.Title>
                            <ListItem.Subtitle>
                                <Text>React Native Elements</Text>
                            </ListItem.Subtitle>
                        </ListItem.Content>
                        </ListItem>

                        <ListItem
                            // Component={TouchableHighlight}
                            containerStyle={{}}
                            disabledStyle={{ opacity: 0.5 }}
                            onPress={() => this.onPressSetting()}
                            pad={20}
                            style={styles.list}
                            bottomDivider={true}
                        >
                        <Icon
                            name='cake'
                        />
                        <ListItem.Content>
                            <ListItem.Title>
                                <Text>Age</Text>
                            </ListItem.Title>
                            <ListItem.Subtitle>
                                <Text>React Native Elements</Text>
                            </ListItem.Subtitle>
                        </ListItem.Content>
                        </ListItem>

                        <ListItem
                            // Component={TouchableHighlight}
                            containerStyle={{}}
                            disabledStyle={{ opacity: 0.5 }}
                            onPress={() => this.onPressSetting()}
                            pad={20}
                            style={styles.list}
                            bottomDivider={true}
                        >
                        <Icon
                            name='male'
                        />
                        <ListItem.Content>
                            <ListItem.Title>
                                <Text>Gender</Text>
                            </ListItem.Title>
                            <ListItem.Subtitle>
                                <Text>React Native Elements</Text>
                            </ListItem.Subtitle>
                        </ListItem.Content>
                        </ListItem>

                        <ListItem
                            // Component={TouchableHighlight}
                            containerStyle={{}}
                            disabledStyle={{ opacity: 0.5 }}
                            onPress={() => this.onPressSetting()}
                            pad={20}
                            style={styles.list}
                            bottomDivider={true}
                        >
                        <Icon
                            name='scale'
                        />
                        <ListItem.Content>
                            <ListItem.Title>
                                <Text>Weight</Text>
                            </ListItem.Title>
                            <ListItem.Subtitle>
                                <Text>React Native Elements</Text>
                            </ListItem.Subtitle>
                        </ListItem.Content>
                        </ListItem>

                        <ListItem
                            // Component={TouchableHighlight}
                            containerStyle={{}}
                            disabledStyle={{ opacity: 0.5 }}
                            onPress={() => this.onPressSetting()}
                            pad={20}
                            style={styles.list}
                            bottomDivider={true}
                        >
                        <Icon
                            name='height'
                        />
                        <ListItem.Content>
                            <ListItem.Title>
                                <Text>Height</Text>
                            </ListItem.Title>
                            <ListItem.Subtitle>
                                <Text>React Native Elements</Text>
                            </ListItem.Subtitle>
                        </ListItem.Content>
                        </ListItem>

                        {/* <TouchableWithoutFeedback style={styles.button} onPress={() => this.onPressSetting()}>
                            <View style={styles.item}>
                                <View style={styles.iconContent}>
                                    
                                    <Icon color='#0CC' name="restaurant" size={40}/>
                                </View>
                                <View style={styles.infoContent}>
                                    <Text style={styles.info}>Meal Plan</Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>

                        
                            
                    {/* </View> */}
                </View>
            </ScrollView>
            
            
        );
    }
}

const styles = StyleSheet.create({
    button:{
        alignItems:"center",
        backgroundColor:"white",
        width:400,
        marginBottom:1
    },
    scroll:{
        backgroundColor: 'white',
    }, 
    header:{
        backgroundColor: "white",
        height: 130,
        marginTop:-20
    },
    headerInfo:{
        marginLeft: 10
    },
    headerContent:{
        padding:30,
        alignItems: 'center',
        flexDirection:'row'
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
    },
    name:{
        fontSize:22,
        color:"#000000",
        fontWeight:'600',
    },
    userInfo:{
        fontSize:16,
        color:"#778899",
        fontWeight:'600',
    },
    body:{
        // backgroundColor: "#778899",
        height:500,
        alignItems:'center',
    },
    item:{
        flexDirection : 'row'
    },
    infoContent:{
        flex:1,
        alignItems:'flex-start',
        paddingLeft:5,
        marginLeft:-300,
        paddingBottom:10
    },
    iconContent:{
        flex:1,
        alignItems:'flex-start',
        paddingRight:5,
    },
    icon:{
        width:30,
        height:30,
        marginTop:20,
    },
    info:{
        fontSize:18,
        marginTop:20,
        // color: "#FFFFFF",
    }
});

