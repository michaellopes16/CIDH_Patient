/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {Image } from 'react-native-elements';
// import { Button } from 'nachos-ui';
//import ToggleSwitch from 'toggle-switch-react-native'
import { 
  StyleSheet,
  View,
  ScrollView,
  ImageBackground

} from 'react-native';

import  CardMessage  from './componets/CardMessage'
import { Container, Header, Content, Button, Text } from 'native-base';

const images = [
        {
          id: "./img/BG1.png",
          uri: require("./img/BG1.png")
        },
        {
          id:  "./img/BG2.png",
          uri: require("./img/BG2.png")
        },
        { 
          id: "image_aviao",
          uri: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        }
      ];

export default class App extends Component{

  render(){
    return (
          <View style={styles.container}>
             <CardMessage images={images}/>
          </View>
    );
  }
};

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    btn :{
      margin: 10,
      backgroundColor: "#FFF",
      alignContent:"center",
      textAlign: "center",
      alignItems: "center" 
    },
    btnStyle : { 
      margin: 15 
    },
    imgAvatar:{
      width: 200,
      height: 200,
      alignContent: "center"
    },
    postContainer:{
      alignContent: 'center',
      marginHorizontal: 20,
      marginVertical: 10,
      padding: 20,
      borderRadius: 5,
      backgroundColor: '#FFF',
    },
    postTitle:{
      fontSize:24,
      fontWeight:'bold',
      alignItems: 'center',
      textAlign: 'center',
      marginBottom: 5,
      padding: 5
    },
    postText:{
      fontSize: 18,
      color: "#666",
      alignContent: 'center'
    },
    toggle:{
      alignItems: 'center',
      marginHorizontal: 50,
      marginVertical: 10,
      color:"#FFF",
      padding: 10
    },
    view: {
      marginTop:20,
      justifyContent: "center",
      alignItems:"center"
    }

});