import {StyleSheet} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { COLORS } from '../theme/theme';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import MenuScreen from '../screens/MenuScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeIcon from '../assets/Icons/home';


import ReorderIcon from '../assets/Icons/reorder';
import PersonIcon from '../assets/Icons/person';

import { ShoppingCartTabIcon } from '../components/ShoppingCartTabIcon';

const Tab = createBottomTabNavigator();

const ButtomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarItemStyle: styles.tabBarItemStyle,
        tabBarActiveTintColor: COLORS.tabBarActiveTintColor,
        tabBarInactiveTintColor: COLORS.tabBarInactiveTintColor

      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{tabBarIcon: ({color}) => (<HomeIcon color={color}/>)}}></Tab.Screen>
      <Tab.Screen name="MenuScreen" component={MenuScreen} options={{tabBarIcon: ({color}) => (<ReorderIcon color={color}/>)}}></Tab.Screen>
      <Tab.Screen name="CartScreen" component={CartScreen} options={{tabBarIcon: ({color}) => (<ShoppingCartTabIcon color={color}/>)}}></Tab.Screen>
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{tabBarIcon: ({color}) => (<PersonIcon color={color}/>)}}></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.primaryWhiteHex,
    borderTopWidth: 0,
    elevation: 0
  },
  tabBarItemStyle: {
  }
});

export default ButtomTabNavigator;
