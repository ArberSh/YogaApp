import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Camera as ExpoCamera, CameraType } from "expo-camera";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import YogaCamera from "../assets/YogaCamera.png";

const CameraComponent = ({ navigation }) => {
  const [type, setType] = useState(CameraType.front);
  const [permission, requestPermission] = ExpoCamera.useCameraPermissions();
  const [showTimer, setShowTimer] = useState(false); // State to control timer visibility

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center", margin: 10 }}>
          We need your permission to show the camera
        </Text>
        <TouchableOpacity
          onPress={requestPermission}
          title="Grant Permission"
          style={{
            backgroundColor: "#49A003",
            padding: 8,
            marginHorizontal: 10,
          }}
        >
          <Text style={{ textAlign: "center", color: "white", fontSize: 16 }}>
            GRANT PERMISSION
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Function to handle start button press
  const handleStartPress = () => {
    setShowTimer(true); // Set showTimer state to true to display the timer
  };

  // Function to handle stop button press
  const handleStopPress = () => {
    setShowTimer(false); // Set showTimer state to false to hide the timer
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <View style={styles.container}>
      {showTimer && ( // Render CountdownCircleTimer if showTimer is true
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 100,
          }}
        >
          <Text style={{ color: "black", fontSize: 24 }}>Mountain Pose</Text>
          <CountdownCircleTimer
            isPlaying
            strokeWidth={6}
            size={100}
            duration={180}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[180, 120, 60, 0]}
          >
            {({ remainingTime }) => <Text>{remainingTime}</Text>}
          </CountdownCircleTimer>
        </View>
      )}
      <ExpoCamera style={styles.camera} type={type}>
        <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
          <Image
            style={{ width: 200, height: 400, opacity: 0.8 }}
            source={YogaCamera}
          ></Image>
        </View>
      </ExpoCamera>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        {!showTimer && ( // Render Start button if showTimer is false
          <TouchableOpacity
            onPress={handleStartPress}
            style={{ margin: 10, backgroundColor: "#49A003", padding: 10, width: 100, alignItems: "center" }}
          >
            <Text style={{ color: "white" }}>Start</Text>
          </TouchableOpacity>
        )}
        {showTimer && ( // Render Stop button if showTimer is true
          <TouchableOpacity
            onPress={handleStopPress}
            style={{ margin: 10, backgroundColor: "#FF5733", padding: 10, width: 100, alignItems: "center" }}
          >
            <Text style={{ color: "white" }}>Stop</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  camera: {
    marginTop: 50,
    flex: 1,
  },
});

export default CameraComponent;
