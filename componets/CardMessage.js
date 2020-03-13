import React, { Component } from 'react';
import { Picker, Form, Content, Item, Input,Icon, Button, Text } from 'native-base';
import { 
    StyleSheet,
    View,
    ScrollView,
    Dimensions,
    ImageBackground,
    Image

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
  {
    name: "Escolha uma categoria",
    key: "key5"
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
            selectedIndex:0,
            selected2: "key2"
        };
    }
    onValueChange2(value) {
      this.setState({
        selected2: value
      });
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
        const {circles} = this.props;
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
                       <Image
                          source={require('../img/P1.png')}
                          style={styles.imgAvatar}
                       >  
                       </Image>   
                        <Content style={styles.formContainer}>
                          <Item>
                            <Text style={styles.postTitle}>Agora me diga seu nome, sua idade e seu gênero!</Text>
                          </Item>
                          <Item rounded style={{padding:5, marginTop:5}}>
                            <Input  placeholder='Seu nome'></Input>
                          </Item>
                          <Item rounded style={{padding:5, marginTop:5}}>
                            <Input  placeholder='Sua idade'></Input>
                          </Item>
                          <Content  style={{padding:5, marginTop:5}}>
                            <Form>
                              <Text> Gênero </Text>
                              <Item rounded picker>
                                <Picker
                                  mode="dropdown"
                                  iosIcon={<Icon name="arrow-down" />}
                                  style={{ width: undefined }}
                                  placeholder="Select your SIM"
                                  placeholderStyle={{ color: "#bfc6ea" }}
                                  placeholderIconColor="#007aff"
                                  selectedValue={this.state.selected2}
                                  onValueChange={this.onValueChange2.bind(this)}
                                >
                                  <Picker.Item label="Masculino" value="key0" />
                                  <Picker.Item label="Feminino" value="key1" />
                                  <Picker.Item label="Outro" value="key2" />
                                </Picker>
                              </Item>
                            </Form>
                          </Content>
                        </Content>
                     </ImageBackground>
                     <ImageBackground
                            source={require("../img/background.png")}
                            style={styles.backgroundImage}> 
                            <Image
                                source={require('../img/P1.png')}
                                style={styles.imgAvatar}
                            >  
                            </Image>        
                            <Content style={styles.formContainer}>
                               <Text style={styles.postTitle}>Tudo pronto :)</Text>
                               <Text style={styles.postTitle}> Clique no botão abaixo e nos informe como está se sentindo hoje :)</Text>
                               <Button style={styles.btn} bordered rounded>
                                   <Text style={{fontSize:18}}>Iniciar</Text>
                               </Button>
                                  
                              </Content>
                          </ImageBackground>
                  </ScrollView>
                  <View style={styles.circleDiv}>
                    {circles.map(( circle, i) =>(
                      <View 
                        key={circle.id}
                        style={[
                          styles.whiteCircle, {opacity: i === selectedIndex ? 0.5 : 1}
                        ]}
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
      },
      btn:{
        alignContent: "center",
        alignItems:"center",
        justifyContent:"center",
        height:50,
        marginTop:50
      }
});