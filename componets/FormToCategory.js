import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
    ImageBackground,
    Dimensions,
    Text
  } from 'react-native';
const DEVICE_WIDTH = Dimensions.get("window").width;

export default class FormToCategory extends Component {

    render () {
        return (
            <View style={{height:"100%", width:"100%"}} >
                <ImageBackground
                    source={require("../img/background.png")}
                    style={styles.backgroundImage}>
                    <View>
                        <Text>Botão</Text>
                    </View>
                 </ImageBackground>
            </View>
        );
    }
};
const styles = StyleSheet.create({
    backgroundImage:{
    height: "100%",
    width:DEVICE_WIDTH
  }
});