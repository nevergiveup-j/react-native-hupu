/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  NavigatorIOS,
  Text,
  View
} from 'react-native';

import NewsListView from './app/views/list';

const hupu = React.createClass({
  render: function () {
    return (
      <NavigatorIOS
        barTintColor = '#c01e2f'
        titleTextColor = '#fff'
        initialRoute = {{
          title: '虎扑',
          component: NewsListView,
        }}
      />
    );
  }
})

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('hupu', () => hupu);
