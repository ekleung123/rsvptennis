import { 
  Text, StyleSheet, ImageBackground,
  View, Dimensions, Image } from "react-native";
import { USERNAME } from "../constants/constants";
import NavButton from "../components/NavButton";
import FormInput from "../components/FormInput";
import ScreenAlert from "../components/ScreenAlert";
const bgImage = require("../assets/tennisball.png"); 
const logo = require("../assets/mppplogo.png"); 

export default function LogIn(props) {
  return (
    <>
      <ImageBackground 
        source={bgImage} resizeMode="cover" style={styles.imgbkg}>
      </ImageBackground>
    
      <View style={styles.screenContainer} nestedScrollEnabled={true} scrollEnabled={true}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} /> 
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Mount Plymouth Public Park - Tennis Courts</Text>
        </View>
        <View>
          <FormInput icon="user" value={USERNAME} label="ID" />
          <FormInput icon="lock1" value="●●●●●●●●" label="Password" />
          <ScreenAlert 
            msg="For this demonstration, please click LOG IN below. The form fields are uneditable." 
          />
          <NavButton type={"login"} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    top: 50, 
    position: "absolute", 
    width: "100%",
    padding: 12,
  },
  imgbkg: {
    height: 500, 
    width: 500, 
    top: 200, 
    right: -40, 
    opacity: 0.05,
  },
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
  headerText: {
    fontSize: 25,
    fontFamily: "Trocchi",
    color: "#2F4F4F",
    textAlign: "center"
  },
  headerContainer: {
    marginTop: 30,
    marginBottom: 20,
  }
});