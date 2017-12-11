/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Navigator,
  View
} from 'react-native';

import Home from './app/iOSHome'
import ChatBox from './app/components/ChatBox'
import CallBox from './app/components/CallBox'
import ContactSelection from './app/components/ContactSelection'

import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  ChatBox: {
    screen: ChatBox,
    navigationOptions: {
      header: null,
      footer: null
    }
  },
  CallBox: {
    screen: CallBox,
    navigationOptions: {
      header: null
    }
  },
  ContactSelection: {
    screen: ContactSelection,
    navigationOptions: {
      header: null
    }
  }
});

export default App;
