import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import { Entypo } from '@expo/vector-icons'; 
const ball = require("../assets/balltimeslot.png");

function TimeSlot(props){

  let bkgColor, fadedObj, slotIcon, icon, iconColor;

  switch(props.type) {
    case "booked":
      bkgColor = "#90EE90"; 
      icon = "trash";
      iconColor = "black";
      break;
    case "confirm_book":
      bkgColor = "orange";
      iconColor = "black";
      break;
    case "confirmed_booked":
      bkgColor = "#90EE90";
      iconColor = "black";
      break;
    case "confirm_delete":
      bkgColor = "#90EE90";
      icon = "thumbs-up";
      iconColor = "black";
      break;
    case "deleted":
        bkgColor = "#d9d7d7";
        fadedObj = {
          color: "#A9A9A9"        
        };
      break;
    case "available":
      bkgColor = "orange"; // orange
      icon = "plus";
      iconColor = "black";
      break;
  };

  return (
    <View style={[styles.availableItem, {backgroundColor: bkgColor}]}>
      <View style={styles.slot}>
        <Text style={[styles.court, fadedObj]}>
          Court {props.court}
        </Text>
        <Text style={[styles.text, fadedObj]}>
            April {props.day} @ {props.time}:00
        </Text>
      </View>
      { icon && (
      <View style={styles.icon}>
        <Pressable onPress={props.buttonHandler.bind(this,
          props.id,
          props.court,
          props.day,
          props.time
        )}>
          <Entypo name={icon} size={24} color={iconColor} />
        </Pressable>
      </View>
      ) }
    </View>
  );
};

const styles = StyleSheet.create({
  availableItem: {
    width: "100%",
    marginTop: 2,
    padding: 7,
    display: "flex",
    flexDirection: "row",
    borderRadius: 5,
  },
  court: {
    fontWeight: "bold",
    color: "black",
  },
  text: {
    color: "black"
  },
  slot: {
    flex: 5
  },
  icon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  }
});

export default TimeSlot;