import { Text, StyleSheet, View, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
const exclaim = require("../assets/exclaim.png"); 

export default function ScreenAlert(props){
  return (
    <View style={styles.screenalert}>
      <View style={styles.icon}>
        {/* <Ionicons name="alert-circle" size={34} color="red" />   */}
        <Image source={exclaim} style={styles.exclaim} /> 
      </View>
      <Text style={styles.text}>
        {props.msg}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenalert: {
    flexDirection: "row",
    width: "105%",
    alignSelf: "center",
    marginTop: 5
  },
  icon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "tomato",
    marginBottom: 5,
  },
  text: {
    flex: 7,
    fontSize: 16,
    textAlign: "left",
    backgroundColor: "tomato",
    marginBottom: 5,
    marginRight: 0,
    padding: 12,
    paddingRight: 15,
    fontFamily: "Arial",
  },
  exclaim: {
    height: 32,
    width: 32,
  }
});