import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppsIcon from '../assets/Icons/apps';
import { BORDERRADIUS, COLORS, SPACING } from '../theme/theme';

const AppIconComponent = (props: {color: string, size: number}) => {
    return (
        <View style={styles.container}>
            <AppsIcon color={props.color} size={props.size} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: SPACING.space_8,
        borderRadius: BORDERRADIUS.radius_25,
        backgroundColor: COLORS.primaryWhiteHex,
    }
})

export default AppIconComponent
