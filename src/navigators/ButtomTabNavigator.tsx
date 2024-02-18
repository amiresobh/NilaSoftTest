import {StyleSheet, View, Text} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import MenuScreen from '../screens/MenuScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeIcon from '../assets/Icons/home';

import ReorderIcon from '../assets/Icons/reorder';
import PersonIcon from '../assets/Icons/person';

import {ShoppingCartTabIcon} from '../components/ShoppingCartTabIcon';
import {useStore} from '../store/store';

const Tab = createBottomTabNavigator();

const ButtomTabNavigator = () => {
  const CartList = useStore((state: any) => state.CartList);
  const ShoppingCartTabIconComponent = (props: {color: string}) => {
    return (
      <>
        {CartList.length > 0 ? (
          <View
            style={{
              width: FONTSIZE.size_40,
              height: FONTSIZE.size_40,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: props.color,
                width: FONTSIZE.size_14,
                height: FONTSIZE.size_14,
                position: 'absolute',
                top: 0,
                right: 0,
                borderRadius: BORDERRADIUS.radius_25,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <Text style={{color: COLORS.primaryWhiteHex, fontSize: FONTSIZE.size_10, fontFamily: FONTFAMILY.poppins_medium}}>{CartList.length}</Text>
            </View>
            <ShoppingCartTabIcon color={props.color} size={FONTSIZE.size_24} />
          </View>
        ) : (
          <ShoppingCartTabIcon color={props.color} size={FONTSIZE.size_30} />
        )}
      </>
    );
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarItemStyle: styles.tabBarItemStyle,
        tabBarActiveTintColor: COLORS.tabBarActiveTintColor,
        tabBarInactiveTintColor: COLORS.tabBarInactiveTintColor,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => <HomeIcon color={color} />,
        }}></Tab.Screen>
      <Tab.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{
          tabBarIcon: ({color}) => <ReorderIcon color={color} />,
        }}></Tab.Screen>
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarIcon: ({color}) => (
            <ShoppingCartTabIconComponent color={color} />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => <PersonIcon color={color} />,
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.primaryWhiteHex,
    borderTopWidth: 0,
    elevation: 0,
  },
  tabBarItemStyle: {},
});

export default ButtomTabNavigator;
