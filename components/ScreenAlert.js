import { Text, StyleSheet, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function ScreenAlert(props){
  return (
    <View style={styles.screenalert}>
      <View style={styles.icon}>
        <Ionicons name="alert-circle" size={34} color="red" />  
      </View>
      <Text style={styles.text}>
        {props.msg}
      </Text>
    </View>
  );
};

export default ScreenAlert;

const styles = StyleSheet.create({
  screenalert: {
    flexDirection: "row",
    width: "105%",
    alignSelf: "center",
  },
  icon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "pink",
    marginBottom: 5,
  },
  text: {
    flex: 7,
    fontSize: 14,
    textAlign: "left",
    backgroundColor: "pink",
    marginBottom: 5,
    marginRight: 0,
    padding: 10,
    fontFamily: "EncodeSans",
  },
});