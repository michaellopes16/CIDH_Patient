import React, { Component } from 'react';
import { Container, Header, Content, Item, Input } from 'native-base';
import { 
    StyleSheet,
    View,
    ScrollView,
    Dimensions,
    ImageBackground,
    Image,
    Text
  } from 'react-native';
import FormToCategory from './FormToCategory';
import PickerInputCategory from './PickerInputCategory'
const DEVICE_WIDTH = Dimensions.get("window").width;

const categorys = [
  {
    name: "Doenças Cardíacas",
    key: "key0"
  },
  {
    name: "Doenças Reumatológicas",
    key: "key1"
  },
  {
    name: "Doenças Pscicológicas",
    key: "key2"
  },
  {
    name: "Doenças pulmonares",
    key: "key3"
  },
  {
    name: "Diabetes",
    key: "key4"
  },
];
const diabetes = [
  { name: "Diabetes tipo I",
    key: "d0"},
  {name: "Diabetes tipo II",
    key: "d1"},
  { name: "Diabetes tipo III",
    key: "d2"}
];
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
        console.log("selectedIndex: "+selectedIndex)
        // if(selectedIndex != images.length ){
              return( 
              <View style={{height:"100%", width:"100%", alignItems:"center"}}>
                  <ScrollView horizontal pagingEnabled onMomentumScrollEnd = {this.setSelectedIndex}>
                      {images.map(image =>(
                          <Image 
                            key={image.id}
                            source={image.uri}
                            style={styles.backgroundImage}
                          />
                      ))}       
                     <ImageBackground
                       source={require("../img/background.png")}
                       style={styles.backgroundImage}> 
                       <Image
                          source={require('../img/P1.png')}
                          style={styles.imgAvatar}
                       >  
                       </Image>        
                       <Content style={styles.formContainer}>
                              <Item>
                                <Text style={styles.postTitle}>Em qual dessas categorias você se encaixa?</Text>
                              </Item>
                              <Item>
                                <PickerInputCategory categorys={categorys}></PickerInputCategory>
                              </Item>
                        </Content>
                     </ImageBackground>
                     <ImageBackground
                       source={require("../img/background.png")}
                       style={styles.backgroundImage}>    
                     
                     </ImageBackground>
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
        //  }else{
        //   const {images} = this.props;
        //   //this.setState({selectedIndex:selectedIndex-1});
        //    return (         
        //    <View style={{height:"100%", width:"100%", flex: 1}} >
        //         <ImageBackground
        //             source={require("../img/background.png")}
        //             style={styles.backgroundImage}>

        //        </ImageBackground>
        //     <View style={styles.circleDiv}>
        //           {images.map(( image, i) =>(
        //             <View 
        //             key={image.id}
        //             style={[
        //               styles.whiteCircle, {opacity: i === selectedIndex ? 0.5 : 1}
        //             ]}
        //             />
        //             ))}    
        //       </View>    
        //     </View>
        //     );
        //  }
  }
};
const styles = StyleSheet.create({
    postTitle:{
        fontSize:24,
        fontWeight:'bold',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 5,
        padding: 5,
        color: "#2C7BFD"
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
      imgAvatar:{
        width: 200,
        height: 200,
        alignContent: "center",
        alignItems:"center",
        justifyContent:"center"

      },
      formContainer:{
        flex: 1,
        alignContent: 'center',
        marginHorizontal: 20,
        marginVertical: 30,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#FFF',
      },
      whiteCircle:{
        width:6,
        height: 6,
        borderRadius: 3,
        margin: 5,
        backgroundColor: "#fff"
      },
      backgroundImage:{
        alignContent: "center",
        alignItems:"center",
        justifyContent:"center",
        height: "100%",
        width:DEVICE_WIDTH
      }
});