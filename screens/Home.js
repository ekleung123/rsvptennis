import { Text, View, StyleSheet, Image } from "react-native";
import NavButton from "../components/NavButton";
import { useGetBookingCount } from "../hooks/useGetBookingCount";

const grass = require("../assets/grassball.png");
const tennisplayers = require("../assets/tennisplayers.png");

function Home(props) {
  useGetBookingCount();
  return (
    <View style={styles.screenContainer}>
      <View>
        <View style={styles.subScreenContainer}>
          <Text style={styles.pageHeader}>
            The Mount Plymouth Public Park welcomes you!
          </Text>
          <Text style={styles.text}>
            We have two tennis courts you can reserve for up to two weeks in advance.  How can we serve you?  
          </Text>
        </View>
        <View style={styles.tennisplayersContainer}>
         <Image source={tennisplayers} style={styles.tennisplayers} /> 
        </View>
        <View>
          <NavButton type="makebooking" />
          <NavButton type="yourbookings" />
        </View>
      </View>
      <View style={styles.grassContainer}>
        <Image source={grass} style={styles.grass} /> 
      </View>
      <View style={styles.bottomContainer}>

      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  subScreenContainer :{
    padding: 12
  },
  pageHeader: {
    fontFamily: "Trocchi",
    fontSize: 24,
  },
  textbold: {
    fontWeight: "bold"
  },
  text: {
    fontFamily: "EncodeSans",
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16
  },
  grassContainer: {
    aspectRatio: 8.62,
    justifyContent: "center"  
  },
  grass: {
    resizeMode: "contain",
    width: "100%",
    height: "100%"
  },
  tennisplayersContainer: {
    aspectRatio: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  tennisplayers: {
    resizeMode: "contain",
    width: "100%",
    height: "100%"
  },
  bottomContainer: {
    backgroundColor: "#0D9002",
    height: "100%",
    marginTop: -1,
  },
});