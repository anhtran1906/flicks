import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  LeftButton,
  RightButton,
  Keyboard,
  Title,
  Image
} from 'react-native';
var NavigationBarRouteMapper = {
  LeftButton: (route, navigator, index, navState) =>{
    return
  },
  RightButton: (route, navigator, index, navState) => {
    if(route.name == 'Details'){
      return (
        <TouchableOpacity style={stylesCSS.tabbarHeadr}
          onPress={() => {
            navigator.refresh = true;
            navigator.pop();}
          }>
        </TouchableOpacity>
      );
    }
  },
  Title: (route, navigator, index, navState) => {
    return
  },
}
const stylesCSS = StyleSheet.create({
  tabbarHeadr: {
    marginTop: 3.5,
  },
  headerFontSize: {
    fontSize: 18,
  },
  icon: {
    width: 25,
    height: 25,
    opacity: 0.5,
    marginRight: 8.5
  },
});
// export this component
module.exports = (
  <Navigator.NavigationBar
    routeMapper={NavigationBarRouteMapper} />
)
