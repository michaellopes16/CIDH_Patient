/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Avatar, Image } from 'react-native-elements';
import { Bubble } from 'nachos-ui';
//import ToggleSwitch from 'toggle-switch-react-native'
import { 
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  Text

} from 'react-native';


export default class App extends Component{

  state = {
    isOnLargeToggleSwitch: false,
  };
  onToggle(isOn) {
    console.log("Changed to " + isOn);
  }
  
  render(){
    return (
      <ImageBackground source={require("./img/background.png")} style={{width: '100%', height: '100%'}}>
          <ScrollView style={styles.container}>
          <View style={styles.view}>
              <Image
                  source={require("./img/P1.png")}
                  style={styles.imgAvatar}
                />
            </View>
            <View style={styles.postContainer}>
                <Text style={styles.postTitle}>
                  {`Olá! :) Eu sou o CIDH! \n\nEstou aqui para ajudar você e outras milhares de pessoas que sofrem com doenças crônicas.`}

                </Text>
            </View>
          </ScrollView>
        </ImageBackground>
    );
  }
};

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    bubbleStyle :{
      margin: 10 
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