import { View, ActivityIndicator, StyleSheet } from "react-native";

export default function LoadingSpinner(){
  return (
    <View style={styles.spinner}>
      <ActivityIndicator size="large" />    
    </View>
  );
};

const styles = StyleSheet.create({
  spinner: {
    marginTop: 20,
  },
});