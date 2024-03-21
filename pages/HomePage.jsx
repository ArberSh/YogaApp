import React from 'react'
import { StyleSheet,View,Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function HomePage() {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <View style={style.Nav}>
        <Text>Test</Text>
      </View>
    <Text style={style.button}>Prov</Text>
    <View style={style.button}>
    <Button style={style.button} color="green" title='Press here' onPress={() => navigation.navigate('Details')} />
    </View>
    <Button color="green" title='Press here' onPress={() => navigation.navigate('Beginner')} />
    </View>
  )
}

const style = StyleSheet.create({
  Nav:{

  },
  button : {
    marginBottom:10,
    backgroundColor:'red'
},
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  }

})

export default HomePage