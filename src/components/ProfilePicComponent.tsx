import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfilePicComponent = (props: {size: number}) => {
  return (
    <View style={{...styles.container, ...{height: props.size, width: props.size}}}>
        <Image
            source={require('../assets/Images/ellipse2.png')}
            style={{...styles.Image, ...{height: props.size, width: props.size}}}
        />
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        
    },
    Image: {
        
    }
})
export default ProfilePicComponent