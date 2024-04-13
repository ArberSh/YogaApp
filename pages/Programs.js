import React, { useEffect, useState } from 'react';
import { FlatList,StyleSheet, ScrollView, Button, Image, Text, View } from 'react-native';
import Program from '../components/Program';
import ProgramData from '../ProgramData.json'

function Programs() {
  const [data,setData] = useState([])

  useEffect(() => {
    setData(ProgramData)
  },[]);
  
  const renderItem = ({item,index}) => <Program key={index} data={item}/>
  return (
    <FlatList style={styles.container}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:14,
    backgroundColor:"#EFEFEF"
  },
});

export default Programs;
