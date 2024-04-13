import { Image,StyleSheet,View, Text } from 'react-native'
import React from 'react'

const Exercise = ({data}) => {
  return (
    <View style={style.Container}>
    <View>
    <Image/>

    </View>
      <Text>Exercise</Text>
    </View>
  )
}

const style = StyleSheet.create({
    Container:{
        zIndex:100,
        top:-10,
        backgroundColor:"blue"
    }
})

export default Exercise