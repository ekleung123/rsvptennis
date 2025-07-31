import { View, Text, StyleSheet, Image } from "react-native";
import { DrawerContentScrollView, 
  DrawerItemList } from "@react-navigation/drawer";

const logo = require("../assets/mppplogo.png"); 

export default function CustomDrawer(props){
  return (
    <View style={{flex: 1}}>
      <View>
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </View>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} /> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    aspectRatio: 3.74, // ratio of the image
    justifyContent: "center", 
    alignItems: "center", 
  },
  logo: {
    resizeMode: "contain", 
    width: "130%",
    height: "130%",
  },
});