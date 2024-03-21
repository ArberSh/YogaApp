import React from 'react'
import { TouchableOpacity,StyleSheet,View,Text, Button, Image } from 'react-native'
import MenuImg from '../assets/bars-solid (1).svg'

function DetailsScreen() {
  return (
    <View style={style.NavContainer}>
      <View style={style.First}>
        <TouchableOpacity style={style.Image}>
          <Image source={MenuImg}/>
        </TouchableOpacity>
      </View>
      <Image source={MenuImg}/>
      <Text>Hi</Text>
    </View>
  )
}

const style = StyleSheet.create({
  NavContainer:{
    zIndex:100,
    marginTop:20
  },
  Image:{
    width:20,
    height:20,
    backgroundColor:'red'
  }
})



export default DetailsScreen