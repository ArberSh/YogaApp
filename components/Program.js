import React from 'react'
import { StyleSheet,Button, Image, Text, View } from 'react-native'
import BeginnerYoga from '../assets/BeginnerYoga.webp'
import Clock from '../assets/clock.png'
import Play from '../assets/play.png'

const Program = () => {
  return (
    <View style={styles.MainContainer}>
      <View >
        <View style={styles.ImageContainer}>
        <Image source={BeginnerYoga} style={{ width: 200, height: 200 }} />
        </View>
        <View style={{marginBottom:10}}>
        <Text style={styles.BoldText}>Beginners Mind</Text>
        <Text style={styles.NormalText}>Beginner</Text>
        </View>
        <View style={[styles.Row,styles.Space]} >
          <View style={styles.Row}>
          <Image style={{ width: 20, height: 20 }} source={Clock}></Image>
          <Text style={{marginHorizontal:5}}>15 - 30min/class</Text>
          </View>
          <View style={styles.Row}>
          <Image style={{ width: 20, height: 20 }} source={Play}/>
          <Text style={{marginHorizontal:5}}>9 classes</Text>
          </View>
        </View>
        <View>
          <Text style={{marginBottom:10}}>Sed ullamcorper auctor quam, ut fringilla justo lacinia sed. Donec ac scelerisque sapien. Suspendisse sit amet lacinia justo. Sed nec enim eu orci pharetra venenatis. Donec sagittis ligula et mi sagittis tincidunt. Nam vehicula ultrices bibendum. Nulla facilisi.</Text>
        </View>
        <Button color="#49A003" title="Click Me">Idk</Button>
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