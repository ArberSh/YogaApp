import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const AboutUs = () => {
  return (
    <View>
      <TouchableOpacity style={{ backgroundColor: 'white', padding: 16, borderRadius: 5,borderBottomColor:'#B9B9B9',borderBottomWidth:1,borderTopWidth:1,borderTopColor:'#B9B9B9'}}>
          <Text style={{ color: 'black' , fontSize:18}}>Love Yoga? Rate Us!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: 'white', padding: 16, borderRadius: 5,borderBottomColor:'#B9B9B9',borderBottomWidth:1}}>
          <Text style={{ color: 'black' , fontSize:18}}>Give Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: 'white', padding: 16, borderRadius: 5,borderBottomColor:'#B9B9B9',borderBottomWidth:1}}>
          <Text style={{ color: 'black' , fontSize:18}}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: 'white', padding: 16, borderRadius: 5,borderBottomColor:'#B9B9B9',borderBottomWidth:1}}>
          <Text style={{ color: 'black' , fontSize:18}}>Credits</Text>
        </TouchableOpacity>
        <Text style={{fontSize:16,padding:10,backgroundColor:'#EFEFEF'}}>SOCIAL</Text>
        <TouchableOpacity style={{ backgroundColor: 'white', padding: 16, borderRadius: 5,borderBottomColor:'#B9B9B9',borderBottomWidth:1}}>
          <Text style={{ color: 'black' , fontSize:18}}>Visit us on Website</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: 'white', padding: 16, borderRadius: 5,borderBottomColor:'#B9B9B9',borderBottomWidth:1}}>
          <Text style={{ color: 'black' , fontSize:18}}>Visit us on Instagram</Text>
        </TouchableOpacity>
        <Text style={{textAlign:'center',color:'gray',padding:10}}>Yoga - 1.0.0</Text>
    </View>
  )
}

export default AboutUs