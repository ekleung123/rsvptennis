import { Text, View, StyleSheet, TextInput } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

export default function FormInput(props){
  return (
    <>
      <Text style={styles.inputText}>
        <AntDesign name={props.icon} size={18} color="#2F4F4F" />
        {props.label}
      </Text>
      <TextInput 
        editable={false} style={styles.inputField} value={props.value} 
      />
    </>
  );
};

const styles = StyleSheet.create({
  inputText: {
    fontWeight: "bold",
    fontFamily: "EncodeSans",
    fontSize: 18,
    color: "black",
  },
  inputField: {
    fontSize: 18,
    height: 40,
    margin: 5,
    borderWidth: 2, fontFamily: "EncodeSans",
    paddingLeft: 20,
    backgroundColor: "white",
    borderRadius: 15,
    // width: "100%",
  },
});