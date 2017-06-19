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
  TabBarIOS,
} from 'react-native';

import Posts from './posts'

export default class TabBar extends Component {
  constructor() {
    super();
    this.state = {
     selectedTab: 'nowPlaying',
   };
  }

  renderContent(color: string, pageText: string){
    if (pageText === 'Top Rated') {
     return (
       <Posts
          route="https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed"
          navigator={this.props.navigator}
       />
     );
   }
   else {
     return (
       <Posts
        route="https://api.themoviedb.org/3/movie/top_rated?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed"
        navigator={this.props.navigator}
      />
    );
   }
 }

  render () {
    return (
      <TabBarIOS
          unselectedTintColor="yellow"
          tintColor="white"
          barTintColor="brown">
          <TabBarIOS.Item
            icon={require('./icons8-Clapperboard-50.png')}
            selected={this.state.selectedTab === 'topRated'}
            onPress={() => {
              this.setState({
                selectedTab: 'topRated',
              });
            }}>
            {this.renderContent('#414A8C', 'Top Rated')}
          </TabBarIOS.Item>
          <TabBarIOS.Item
            icon={require('./icons8-Star Filled-50.png')}
            selected={this.state.selectedTab === 'nowPlaying'}
            onPress={() => {
              this.setState({
                selectedTab: 'nowPlaying',
              });
            }}>
            {this.renderContent('#783E33', 'Now Playing')}
          </TabBarIOS.Item>
        </TabBarIOS>
    )
  }
}
const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});
module.exports = TabBar
