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
  Navigator,
} from 'react-native';
import Posts from "./posts";
import TabBar from "./tabBar";
import Details from "./details";
import NavBar from "./navBar";


export default class Flicks extends Component {
  renderScene(route,navigator) {
    switch (route.name) {
      case 'ListView': return (<TabBar navigator = {navigator} {...route.passProps}/>);
      case 'Details': return (<Details
        title={route.passProps.title}
        image={route.passProps.image}
        date={route.passProps.date}
        vote={route.passProps.vote}
        overview={route.passProps.overview}
        popularity={route.passProps.popularity}
      />);
    }
  }
  configureScene() {
    return Navigator.SceneConfigs.SwipeFromLeft;
  }
  render() {
    return (
      <Navigator
       initialRoute={{name:"ListView"}}
       renderScene={this.renderScene}
       configureScene={this.configureScene.bind(this)}
       navigationBar={NavBar}
     />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Flicks', () => Flicks);
