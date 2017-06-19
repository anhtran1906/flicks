/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  Dimensions,
} from 'react-native';
const {height, width} = Dimensions.get('window');
export default class Posts extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
    };
  }
  componentWillMount () {
    this.getPostsFromApiAsync();
  }
  // onEndReached  = () => {
  //   alert('Lol infinite scrolling!')
  // }
  getPostsFromApiAsync = () => {
    return fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseJson.results)
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <ListView
        contentContainerStyle={styles.list}
        dataSource={this.state.dataSource}
        enableEmptySections
        pageSize={2}
        //onEndReached={this.onEndReached()}
        //initialListSize={1}
        renderRow={(rowData) => this.renderRow(rowData)}
      />
    );
  }

  renderRow(rowData) {
    return (
      <View style={{flexDirection:'row', backgroundColor:'#FF5733'}}>
        <Image
          style={{width:100, height:100}}
          source={{uri: 'https://image.tmdb.org/t/p/w342' + rowData.poster_path}}
        />
        <Text>
          {rowData.original_title}
        </Text>
      </View >

    )
  }
}

const styles = StyleSheet.create({
  list: {
    // marginTop: 20,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // backgroundColor: 'black',
    // alignItems: 'center',
  },
  item: {
    //width: width/2,
    //height: width/2,
    // width: 50,
    // height: 50,
    //backgroundColor: 'black'
  }
});
