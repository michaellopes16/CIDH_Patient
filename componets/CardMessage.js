import React, { Component } from 'react';
// import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import { 
    StyleSheet,
    View,
    ScrollView,
    Dimensions,
    ImageBackground,
    Image,
    Text
  } from 'react-native';
import { Button } from 'native-base';

const DEVICE_WIDTH = Dimensions.get("window").width;
export default class CardMessage extends Component{
    
    scrollRef = React.createRef();
    constructor (props){
        super(props);

        this.state={
            selectedIndex:0
        };
    }
    setSelectedIndex = event =>{
      // width of the viewSize
      const viewSize = event.nativeEvent.layoutMeasurement.width;
      //get current position of the scrallView
      const contentOffset = event.nativeEvent.contentOffset.x;
      const selectedIndex = Math.floor(contentOffset/viewSize);
      this.setState({selectedIndex});
    }    
    render(){
        const {images} = this.props;
        const {selectedIndex} = this.state;
        console.log(images.length -1)
        console.log(selectedIndex === images.length -1)
        console.log(selectedIndex)
        if(selectedIndex != images.length -1){
              return( 
              <View style={{height:"100%", width:"100%"}}>
                  <ScrollView horizontal pagingEnabled onMomentumScrollEnd = {this.setSelectedIndex}>
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
                        style={[
                          styles.whiteCircle, {opacity: i === selectedIndex ? 0.5 : 1}
                        ]}
                      />
                    ))}    
                  </View>
              </View>
              );
         }else{
          const {images} = this.props;
           return(
            <ImageBackground
              source={require("../img/background.png")}
              style={styles.backgroundImage}>
              <View>
                <Text>Botão</Text>
              </View>
            </ImageBackground>
           );
         }
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