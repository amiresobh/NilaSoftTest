import { StyleSheet } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import ProductDetailScreen from '../screens/ProductDetailScreen'
import CartScreen from '../screens/CartScreen'
import ButtomTabNavigator from './ButtomTabNavigator'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false, animation: 'slide_from_bottom'}}>
            <Stack.Screen name='TabNav' component={ButtomTabNavigator}></Stack.Screen>
            <Stack.Screen name='ProductDetail' component={ProductDetailScreen}></Stack.Screen>
            <Stack.Screen name='CartScreen' component={CartScreen}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator 

const styles = StyleSheet.create({})