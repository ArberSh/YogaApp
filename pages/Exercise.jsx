import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';


const Exercise = ({ route }) => {
  const { lessonData } = route.params;
  const navigation = useNavigation();

  if (!lessonData || !lessonData.english_name) {
    console.error("Invalid lesson data:", lessonData);
    return null;

  }
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, margin: 10 }}>
        <View
          style={{
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ objectFit: "contain", width: 300, height: 200 }}
            source={{ uri: lessonData.image }}
          ></Image>
        </View>
        <View style={{ margin: 10 }}>
          <Text style={{ fontSize: 24 }}>{lessonData.english_name}</Text>
          <Text style={{ color: "gray", fontSize: 16, marginTop: 5 }}>
            Level: {lessonData.category}
          </Text>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ fontSize: 16 }}>{lessonData.benefits}</Text>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ marginTop: 10, fontSize: 20 }}>Step by step</Text>
          <Text style={{ fontSize: 16, lineHeight: 23 }}>
            {lessonData.steps}
          </Text>
        </View>
      </ScrollView>
      {/* Positioned TouchableOpacity */}
      <TouchableOpacity onPress={() => navigation.navigate('Camera', { lessonData: route })}  style={styles.cameraButton}>
        <MaterialCommunityIcons
          name="camera"
          size={30}
          color="white"
        ></MaterialCommunityIcons>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cameraButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    height: 60,
    width: 60,
    borderRadius: 65,
  },
});

export default Exercise;
