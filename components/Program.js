import React from 'react'
import { StyleSheet,Button, Image, Text, View } from 'react-native'
import BeginnerYoga from '../assets/BeginnerYoga.webp'
import Clock from '../assets/clock.png'

const Program = () => {
  return (
    <View>
      <View style={styles.container}>
        <Image source={BeginnerYoga} style={{ width: 200, height: 200 }} />
        <Text>Beginners Mind</Text>
        <Text>Beginner</Text>
        <View>
          <Image source={Clock}></Image>
          <Text>15 - 30min/class</Text>
          <Text>9 classes</Text>
        </View>
        <View>
          <Text>pershkrim</Text>
        </View>
        <Button title="Click Me">Idk</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 14
  }
})

export default Program