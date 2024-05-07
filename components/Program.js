import React from 'react'
import { StyleSheet,Button, Image, Text, View } from 'react-native'
import BeginnerYoga from '../assets/BeginnerYoga.webp'
import Clock from '../assets/clock.png'
import Play from '../assets/play.png'
import { useNavigation } from '@react-navigation/native';

const Program = ({data}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.MainContainer}>
      <View >
        <View style={styles.ImageContainer}>
        <Image source={{ uri: data.image}} style={{ width: 200, height: 200 }} />
        </View>
        <View style={{marginBottom:10}}>
        <Text style={styles.BoldText}>{data.title}</Text>
        <Text style={styles.NormalText}>{data.level}</Text>
        </View>
        <View style={[styles.Row,styles.Space]} >
          <View style={styles.Row}>
          <Image style={{ width: 20, height: 20 }} source={Clock}></Image>
          <Text style={{marginHorizontal:5}}>{data.time}min/class</Text>
          </View>
          <View style={styles.Row}>
          <Image style={{ width: 20, height: 20 }} source={Play}/>
          <Text style={{marginHorizontal:5}}>{data.videos} classes</Text>
          </View>
        </View>
        <View>
          <Text style={{marginBottom:10}}>{data.description}</Text>
        </View>
        <Button  
  onPress={() => navigation.navigate('InfoProgram', { data: data })} 
  color="#49A003" 
  title="Join"
></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    marginVertical:10,
    padding:14,
    backgroundColor:"white",
    borderRadius:6
  },
  ImageContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom:10
  },
  BoldText:{
    fontSize:18,
  },
  NormalText:{
    color:"gray"
  },
  Row:{
    flexDirection:"row"
  },
  Space:{
  justifyContent:"space-between",
  padding:5
  }
})

export default Program