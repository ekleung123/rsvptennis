import { View, Text, StyleSheet, Button, Pressable, Image } from "react-native";
import { Entypo } from '@expo/vector-icons'; 
const racket = require("../assets/racketicon.png");

export default function TimeSlot(props){

  let bkgColor, fadedObj, slotIcon, icon, iconColor, opacity; 

  switch(props.type) {
    case "booked":
      bkgColor = "#32CD32"; 
      icon = "trash";
      iconColor = "black";
      break;
    case "confirm_book":
      // bkgColor = "#32CD32"; 
      bkgColor = "#7dcea0";
      iconColor = "black";
      break;
    case "confirmed_booked":
      bkgColor = "#32CD32"; 
      iconColor = "black";
      break;
    case "confirm_delete":
      bkgColor = "#7dcea0";
      icon = "thumbs-up";
      iconColor = "black";
      break;
    case "deleted":
        bkgColor = "#d9d7d7";
        fadedObj = {
          color: "#A9A9A9"        
        };
        opacity = {opacity: 0.6};
      break;
    case "available":
      bkgColor = "#7dcea0";
      icon = "plus";
      iconColor = "black";
      break;
  };

  return (
    <View style={[styles.availableItem, {backgroundColor: bkgColor}]}>
      <View style={styles.slot}>
        <View>
          <Image source={racket} style={[styles.racket, opacity]} />
        </View>
        <View>
          <Text style={[styles.court, fadedObj]}>
            Court {props.court}
          </Text>
          <Text style={[styles.text, fadedObj]}>
              April {props.day} @ {props.time}:00
          </Text>
        </View>
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
    fontSize: 18,
  },
  text: {
    color: "black",
    fontSize: 18,
  },
  slot: {
    flex: 5,
    flexDirection: "row",
  },
  icon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  racket: {
    height: 40,
    width: 40,
    marginRight: 10,
  }
});