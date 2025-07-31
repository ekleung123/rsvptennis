import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import { AuthContextProvider } from "./context/AuthContext";
import { useFonts } from 'expo-font';
import NavTree from "./NavTree";

import { firebaseConfig } from "./firebase/config";
import { DBERROR } from "./constants/constants";

export default function App() {
  const [fontsLoaded] = useFonts({
    "EncodeSans": require("./assets/fonts/EncodeSans-Regular.ttf"),
    "Trocchi": require("./assets/fonts/Trocchi.ttf"),
    "Tauri": require("./assets/fonts/Tauri.ttf"),
    "DelaGothicOne": require("./assets/fonts/DelaGothicOne.ttf"),
  });

  if (!firebaseConfig.projectId) alert(DBERROR);

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <AuthContextProvider>
        <SafeAreaView style={styles.container}>
          <NavTree />
        </SafeAreaView>
      </AuthContextProvider>  
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});