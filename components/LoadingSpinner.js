import { View, ActivityIndicator, StyleSheet } from "react-native";

function LoadingSpinner(){
  return (
    <View style={styles.spinner}>
      <ActivityIndicator size="large" />    
    </View>
  );
};

export default LoadingSpinner;

const styles = StyleSheet.create({
  spinner: {
    marginTop: 20,
  },
});