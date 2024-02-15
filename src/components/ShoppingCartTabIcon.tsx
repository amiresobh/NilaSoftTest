import { View } from 'react-native';
import React from 'react';
import ShoppingCartIcon from '../assets/Icons/shopping_cart';

export const ShoppingCartTabIcon = (props: { color: String; }) => {
    return (
        <View>
            <ShoppingCartIcon color={props.color} />
        </View>
    );
};
