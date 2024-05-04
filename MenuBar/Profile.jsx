import { View, Text,Image } from 'react-native'
import React from 'react'
import Pfp from '../assets/Png.png'
import { Button } from '@mui/material'

const Profile = () => {
  return (
    <View>
      <View style={{alignItems:'center',paddingVertical:10,borderBottomWidth: 1,borderBottomColor:'#B9B9B9'}}>
      <Text style={{fontSize:16}}>Logged in as arbershaska1@gmail.com</Text>
      </View>
      <View style={{
        width:'100%',
        height:100,
        backgroundColor:'white',
        justifyContent:'start',
        alignItems:'center',
        flexDirection:'row',
        padding:20
      }} >
        <Image style={{width:60,height:60,borderRadius:65}} source={Pfp}/>
        <Text style={{marginLeft:20,fontSize:20}}>0 Classes</Text>
      </View>
      <Text style={{margin:10,fontSize:16}}>INFO</Text>
      <View style={{
        backgroundColor:'white'
      }}>
      </View>
    </View>
  )
}

export default Profile