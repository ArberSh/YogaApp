import React from 'react'
import { StyleSheet,View,Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Lesson from '../components/Lesson'

function HomePage() {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <Lesson/>
      <Lesson/>
      <Lesson/>
    </View>
  )
}

const style = StyleSheet.create({

  container:{
    marginTop:20,
    flex:1,
    alignItems: 'center',
  }

})

export default HomePage