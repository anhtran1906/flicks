import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  ListView,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
const {height, width} = Dimensions.get('window');

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      height: 50,
      line: 4,
      marginScroll: 450,
      loading: false,
    }
  }

  handleClick() {
    const state = this.state;
    if (state.height == 50) {
      this.setState({
        height: 50,
        line: 0,
        marginScroll: 100
      })
    } else {
      this.setState({
        height: 50,
        line: 4,
        marginScroll: 450
      })
    }
  }

  render () {
   const height = this.state.height;
   const line = this.state.line;
   const marginScroll = this.state.marginScroll;
   const popularity = parseInt(this.props.popularity);
    return (
    <View>
      <Image
        style={{width:400, height:400}}
        source={{uri: 'https://image.tmdb.org/t/p/w342' + this.props.image}}
      />
        <View>
          <ScrollView>
            <TouchableOpacity
              onPress={() => this.handleClick()}
              >
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                {this.props.title}
                </Text>
                <Text >
                {this.props.date}
                </Text>
                <Text >
                {this.props.vote}
                </Text>
                <Text >
                {this.props.overview}
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        </View>

    )
  }
}
module.exports = Details
