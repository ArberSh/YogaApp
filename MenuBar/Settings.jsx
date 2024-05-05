import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Pfp from '../assets/Png.png'
import { Button } from '@mui/material'
import { ScrollView } from 'react-native-gesture-handler'

const Profile = () => {
  return (
    <ScrollView>
      <View style={{alignItems:'center',paddingVertical:10,borderBottomWidth: 1,borderBottomColor:'#B9B9B9'}}>
      <Text style={{textAlign:'center',width:'100%'}}>Logged in as arbershaska1@gmail.com</Text>
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
      <Text style={{margin:10,fontSize:16}}>GENERAL</Text>
      <View style={{
        backgroundColor:'white'
      }}>
      <View>
     <TouchableOpacity style={{ backgroundColor: 'white', padding: 16, borderRadius: 5,borderBottomColor:'#B9B9B9',borderBottomWidth:1 }}>
          <Text style={{ color: 'black' , fontSize:18 }}>Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: 'white', padding: 16, borderRadius: 5,borderBottomColor:'#B9B9B9',borderBottomWidth:1 }}>
          <Text style={{ color: 'black', fontSize:18 }}>Weekly Goal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: 'white', padding: 16, borderRadius: 5,borderBottomColor:'#B9B9B9',borderBottomWidth:1 }}>
          <Text style={{ color: 'black' , fontSize:18}}>Reminders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: 'white', padding: 16, borderRadius: 5,borderBottomColor:'#B9B9B9',borderBottomWidth:1 }}>
          <Text style={{ color: 'black', fontSize:18 }}>Language</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: 'white', padding: 16, borderRadius: 5,borderBottomColor:'#B9B9B9',borderBottomWidth:1 }}>
          <Text style={{ color: 'black', fontSize:18 }}>Help</Text>
        </TouchableOpacity>
        </View>
        <View>
        <Text style={{fontSize:16,padding:10,backgroundColor:'#EFEFEF'}}>ACCOUNT</Text>
        <TouchableOpacity style={{ backgroundColor: 'white', padding: 16, borderRadius: 5,borderBottomColor:'#B9B9B9',borderBottomWidth:1 }}>
          <Text style={{ color: 'black' , fontSize:18}}>Change Name and Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: 'white', padding: 16, borderRadius: 5,borderBottomColor:'#B9B9B9',borderBottomWidth:1 }}>
          <Text style={{ color: 'black' , fontSize:18}}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: 'white', padding: 16, borderRadius: 5,borderBottomColor:'#B9B9B9',borderBottomWidth:1 }}>
          <Text style={{ color: 'black' , fontSize:18}}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: 'white', padding: 16, borderRadius: 5,borderBottomColor:'#B9B9B9',borderBottomWidth:1 }}>
          <Text style={{ color: 'red', fontSize:18 }}>Delete Account</Text>
        </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default Profile