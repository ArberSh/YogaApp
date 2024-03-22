import { StyleSheet,View, Text } from 'react-native'
import React from 'react'

const Lesson = ( ) => {
  return (
    <View style={style.Container}>
        <View style={style.Title}>
            <Text style={style.FontSize}>Stress Relief</Text>
            <Text>Time:14min</Text>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    Container:{
        padding:10,
        borderRadius:6,
        borderWidth:2,
        borderColor:'gray',
        width:380,
        height:120,
        marginBottom:14
    },
    Title:{
        flexDirection:'column'
    },
    FontSize:{
        fontSize:16
    }
})

export default Lesson