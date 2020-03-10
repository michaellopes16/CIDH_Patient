import React, { Component } from 'react';
// import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import { 
    StyleSheet,
    View,
    ScrollView,
    Dimensions,
    Image,
    Text
  } from 'react-native';

const DEVICE_WIDTH = Dimensions.get("window").width;
export default class CardMessage extends Component{
    
    scrollRef = React.createRef();
    constructor (props){
        super(props);

        this.state={
            selectedIndex:0
        };
    }
    
    render(){

        const {images} = this.props;
        const {selectedIndex} = this.state;
        // console.log(images)
        return( 
        <View style={{height:"100%", width:"100%"}}>
            <ScrollView horizontal pagingEnabled>
                {images.map(image =>(
                    <Image 
                      key={image.id}
                      source={image.uri}
                      style={styles.backgroundImage}
                    />
                ))}
            </ScrollView>
            <View style={styles.circleDiv}>
              {images.map(( image, i) =>(
                <View 
                  key={image.id}
                  style={styles.whiteCircle}
                />
              ))}    
            </View>
        </View>
        );
    }
};
const styles = StyleSheet.create({
    postTitle:{
        fontSize:24,
        fontWeight:'bold',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 5,
        padding: 5
      },
      circleDiv:{
        position: "absolute",
        bottom: 15,
        height: 10,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center"
      },
      whiteCircle:{
        width:6,
        height: 6,
        borderRadius: 3,
        margin: 5,
        backgroundColor: "#fff"
      },
      backgroundImage:{
        height: "100%",
        width:DEVICE_WIDTH
      }
});