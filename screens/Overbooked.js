import { Text, View, StyleSheet } from "react-native";
import NavButton from "../components/NavButton";
import ScreenAlert from "../components/ScreenAlert";
import { OVERBOOKEDMSG } from "../constants/constants";

export default function Overbooked() {  
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.pageHeader}>You're Overbooked!</Text>
      <View>
        <ScreenAlert msg={OVERBOOKEDMSG} />
      </View>
      <View>
        <NavButton type="yourbookings" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 12
  },
  text: {
    fontFamily: "EncodeSans",
    fontSize: 16,
    marginBottom: 10,
  },
  pageHeader: {
    fontFamily: "EncodeSans",
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 10,
  },
});