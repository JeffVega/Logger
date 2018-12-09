import React from 'react';
import LandingPage from './components/landing_page';

import {
  SafeAreaView
} from 'react-native';

import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      
      <LandingPage/>
      
      
    );
  }
}




const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: '#ddd'
  }
})