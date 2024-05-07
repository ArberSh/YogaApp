import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import lessonData from '../LessonData.json'; // Import lesson data
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const InfoProgram = ({ route }) => {
  const { data } = route.params;
  const [lessons, setLessons] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    // Generate lessons based on the number of videos in the program
    const generatedLessons = Array.from({ length: data.videos }, (_, index) => {
      const lessonIndex = index % lessonData.length; // Ensure the lesson index loops back to the beginning
      return lessonData[lessonIndex];
    });
    setLessons(generatedLessons);
  }, [data]);

  return (
    <ScrollView style={{backgroundColor:'white'}}>
      <View style={{alignItems:'center',backgroundColor:'#EFEFEF'}}>
        <Image
          style={{ objectFit: 'contain', width: 300, height: 200 }}
          source={{ uri: data.image }}
        />
      </View>
      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 24 }}>{data.title}</Text>
        <Text style={{ color: 'gray', fontSize: 16, marginTop: 5 }}>
          Level: {data.level}
        </Text>
        <Text style={{ color: 'gray', fontSize: 16, marginTop: 5 }}>
          Time: {data.time} min
        </Text>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <Text style={{ fontSize: 16 }}>{data.description}</Text>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <Text style={{ fontSize: 20, marginTop: 10 }}>Lessons</Text>
        {lessons.map((lesson, index) => (
          <View key={index} style={{ marginVertical: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Exercise', { lessonData: lesson })} style={{alignItems:'center',backgroundColor:'#EFEFEF',padding:10,flexDirection:'row'}}>
                <View style={{backgroundColor:'#49A003',borderRadius:100,width:60,height:60,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:30,color:'white'}}>{index + 1}</Text>
                </View>
                <View style={{marginHorizontal:20}}>
                    <Text style={{fontSize:18}}>{lesson.english_name}</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <MaterialCommunityIcons name='clock-time-eight-outline' color={'gray'} size={18}></MaterialCommunityIcons>
                    <Text style={{color:'gray',marginHorizontal:4}}>{lesson.time}</Text>
                    </View>
                </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default InfoProgram;
