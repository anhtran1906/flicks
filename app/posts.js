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
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
const {height, width} = Dimensions.get('window');
export default class Posts extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
      refreshing: false,
    };
  }
  componentWillMount () {
    this.getPostsFromApiAsync();
  }
  onEndReached  = () => {
    this.getPostsFromApiAsync();
  }

  onRefresh = () => {
    this.setState({
      refreshing: true,
    })
    this.getPostsFromApiAsync().then(() => {
      this.setState({
        refreshing: false
      })
    })
  }
  getPostsFromApiAsync = () => {
    return fetch(this.props.route)
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
    if(this.state.dataSource.getRowCount() === 0 ){
     return (
       <View style={{marginTop:20}}>
        <Text>Loading.....</Text>
        </View>);
   }
   else{
    return (
      <View>
        <ListView
          contentContainerStyle={styles.list}
          dataSource={this.state.dataSource}
          enableEmptySections
          pageSize={2}
          refreshControl={
            <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh.bind(this)}
            />}
          onEndReached={this.onEndReached.bind(this)}
          renderRow={(rowData) => this.renderRow(rowData)}
        />
      </View>
    );
    }
  }

  renderRow(rowData) {
    return (
      <TouchableOpacity onPress={() => this.props.navigator.push({name: 'Details',
      passProps: {
        image: rowData.poster_path,
        title: rowData.title,
        date: rowData.release_date,
        vote: rowData.vote_average,
        overview: rowData.overview,
        popularity: rowData.popularity,
      }
    })}>
      <View style={{flexDirection:'row', backgroundColor:'#FF5733'}}>
        <Image
          style={{width:100, height:100}}
          source={{uri: 'https://image.tmdb.org/t/p/w342' + rowData.poster_path}}
        />
        <Text>
          {rowData.original_title}
        </Text>
      </View >
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
});
module.exports = Posts
