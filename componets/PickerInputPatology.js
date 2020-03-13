import React, { Component } from 'react';
import { Item, Picker, Icon} from 'native-base';
export default class PickerInputPatology extends Component {
    constructor(props) {
    super(props);
    
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(key) {
    this.setState({
      selected2: key
    });
    console.log(this.state.selected2+" no on Value change");
  }

  render() {
    const {patology} = this.props;
    console.log("PATOLOGY: "+patology[0].name);
    // patology.map(x => {
    //   console.log("No render do patology: "+x.name); 
    // });
    return (
          <Item picker rounded>
                <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    placeholder="Selecione uma categoria"
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.selected2}
                    onValueChange={this.onValueChange2.bind(this)}
                    >
                    {patology.map(pat =>(
                       <Picker.Item label={pat.name} value={pat.key}/>
                    ))}                
                </Picker>
          </Item>
          );
      }
}