import React from 'react';
import { View, Text , Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Component1 from '../component1/component1';
import Component2 from '../component2/component2';

const HomeScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Component1/>
    </View>
  );
  
  const ProfileScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Component2/>
    </View>
  );
  
  const RootTabs = TabNavigator({
    Home: {
      screen: HomeScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
  });
  
  export default RootTabs;