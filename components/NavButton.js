import React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'; 

import { useContext } from "react"; 
import { AuthContext } from "../context/AuthContext"; 

function NavButton(props) {
  const navigation = useNavigation();
  const store = useContext(AuthContext);

  let buttonText, logo, color;

  switch(props.type){
    case "login": 
      buttonText = "Log In";
      logo = "login";
      color = "#288539";
      break;
    case "home":
      buttonText = "Return Home";
      logo = "home";
      color = "#288539";
      break;
    case "no-home":
      buttonText = "NO - Return Home";
      logo = "circle-with-cross";
      color = "red";
      break;
    case "yes-confirm":
      buttonText = "YES - Confirm";
      logo = "check";
      color = "green";
      break;
    case "yourbookings":
      buttonText = "Your Bookings (" + store.amountBooked + ")";
      logo = "open-book";
      color = "#ED0800";
      break;
    case "makebooking":
      buttonText = "Make Booking";
      logo = "pencil";
      color = "#4681f4";
      break;
    case "searchanother":
      buttonText = "Search other date";
      logo = "magnifying-glass";
      color = "#4681f4";
      break;
    case "confirm_goback":
      buttonText = "Go back";
      logo = "arrow-bold-left";
      color = "#ED0800";
      break;
  };

  const onPressHandler = (type) => {
    switch(type) {
      case "makebooking":
        navigation.navigate("Make Booking");
        break;
      case "login":
        store.setUser("jjohnson");
        navigation.navigate("Home");
        break;
      case "searchanother":
        navigation.navigate("Make Booking");
        break;
      case "home":
      case "no-home":
        navigation.navigate("Home");
        break;
      case "yourbookings":
        navigation.navigate("Your Bookings");
        break;
      case "confirm_goback":
        navigation.navigate("Your Bookings");
        break;
    };
  };

  return (
    <Pressable 
      style={[styles.button, {backgroundColor: color}]} 
      onPress={() => onPressHandler(props.type)}
    >
      <View style={styles.buttontext}>
        <Entypo name={logo} size={24} color="white" style={styles.logo} />
        <Text style={styles.text}>{buttonText}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    // transition: "0.5s",      
    // boxShadow: "0 0 20px #eee",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    // elevation: 3,
    margin: 6,
    width: "70%",
  },
  text: {
    fontSize: 15,
    lineHeight: 21,
    // letterSpacing: 0.25,
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

export default NavButton;