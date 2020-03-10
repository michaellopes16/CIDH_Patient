import React, { Component } from 'react';
import Carousel from 'react-native-snap-carousel';
import { 
    StyleSheet,
    View,
    ScrollView,
    Dimensions,
    Image,
    Text
  } from 'react-native';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class MyCarousel extends Component {

    _renderItem ({item, index}) {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
    }

    render () {
        return (
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={"this.stateentries."}
              renderItem={this._renderItem}
              sliderWidth={viewportWidth}
              itemWidth={viewportHeight}
            />
        );
    }
}