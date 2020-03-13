import React, { Component } from 'react';
import { Text, Content, Form, Item, Picker, Icon, Switch, View } from 'native-base';
import PickerInputPatology from './PickerInputPatology';
import { 
    StyleSheet
  } from 'react-native';
  const patologies =[
    {

      diabetes:[
        { name: "Diabetes I", key: "D1"},
        { name: "Diabetes II", key: "D2"},
        { name: "Diabetes III", key: "D3"}
      ],
      cardio:[
        { name: "Cardio X", key: "C1"},
        { name: "Cardio Y", key: "C2"},
        { name: "Cardio Z", key: "C3"}
      ],
      reumato:[
        { name: "Dermatomiosite", key: "R1"},
        { name: "Artrite", key: "R2"},
        { name: "Artroze", key: "R3"}
      ],
      pscico:[
        { name: "Depressão", key: "M1"},
        { name: "Ansiedade", key: "M2"},
        { name: "Estresse", key: "M3"}
      ],
      pulmonar:[
        { name: "Asma", key: "P1"},
        { name: "Renite", key: "P2"},
        { name: "Estresse", key: "P3"}
      ]
    }
  ];
export default class PickerInputCategory extends Component {
    constructor(props) {
    super(props);
    this.state = {
      selected2: "key5"
    };
  }
  onValueChange2(label) {
    this.setState({
      selected2: label
    });
    console.log(this.state.selected2+" no on Value change");
  }


  LoadPatologies(){

  }
  render() {
    const {categorys} = this.props
    return (
        <Content>
          <Form>
            <Item picker rounded>
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
                {categorys.map(cate =>(
                    <Picker.Item label={cate.name} value={cate.key} />
                ))}                
              </Picker>
            </Item>
            <Item>
                <Text style={styles.postTitle}>Qual dessas é a sua patologia?</Text>
            </Item>
            {
                patologies.map(val => {    
                  if(this.state.selected2 === "key0"){
                    console.log("Patologies names: "+val.cardio[0].name);
                    return <PickerInputPatology patology={val.cardio}></PickerInputPatology>; 
                  }else if(this.state.selected2 === "key1"){
                      console.log("Patologies names: "+ val.reumato[0].name);
                    return <PickerInputPatology patology={val.reumato}></PickerInputPatology>; 
                  }else if(this.state.selected2 === "key2"){
                    console.log("Patologies names: "+ val.pscico[0].name);
                    return <PickerInputPatology patology={val.pscico}></PickerInputPatology>; 
                  }else if(this.state.selected2 === "key3"){
                    console.log("Patologies names: "+ val.pulmonar[0].name);
                    return <PickerInputPatology patology={val.pulmonar}></PickerInputPatology>; 
                  }else if(this.state.selected2 === "key4"){
                    console.log("Patologies names: "+ val.diabetes[0].name);
                    return <PickerInputPatology patology={val.diabetes}></PickerInputPatology>; 
                  }
              })
            } 
          </Form>
        </Content>

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
        padding: 10,
        color: "#2C7BFD"
      }
});

