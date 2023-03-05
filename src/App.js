import React from 'react';
import {ScrollView, View} from 'react-native';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Posts from './components/Posts';
import Stories from './components/Stories';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <Stories />
          <Posts />
        </View>
      </ScrollView>
      <Navigation />
    </View>
  );
}
