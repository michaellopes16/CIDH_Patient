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
// import  MyCarousel  from './componets/MyCarousel'
import { Container, Header, Content, Button, Text } from 'native-base';

const images = [
        {
          id: "BG1",
          uri: require("./img/BG1.png")
        },
        {
          id:  "BG2",
          uri: require("./img/BG2.png")
        }
      ];
const circles = [
        {id: "c0" },
        {id: "c1" },
        {id: "c2" },
        {id: "c3" },
        {id: "c4" },
      ];
export default class App extends Component{

  render(){
    return (
          <View style={styles.container}>
             <CardMessage images={images} circles={circles}/>
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