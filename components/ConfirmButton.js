import { Text, StyleSheet, View } from "react-native";
import { Entypo } from '@expo/vector-icons'; 

function ConfirmButton(props) {  
  return (
    <View style={styles.button}>
      <View style={styles.buttontext}>
        <Entypo name="check" size={24} color="white" style={styles.logo} />
        <Text style={styles.text}>YES - Confirm</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    margin: 6,
    width: "70%",
    backgroundColor: "green",
  },
  text: {
    fontSize: 15,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
    fontFamily: "Tauri",
  },
  buttontext: {
    flexDirection: "row",
  },
  logo: {
    marginRight: 5,
    fontSize: 20,
  },  
});

export default ConfirmButton;