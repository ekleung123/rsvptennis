import { Text, View, StyleSheet, TextInput } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

function FormInput(props){
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

export default FormInput;

const styles = StyleSheet.create({
  inputText: {
    fontWeight: "bold",
    fontFamily: "EncodeSans",
    fontSize: 16,
    color: "black",
  },
  inputField: {
    fontSize: 14,
    height: 40,
    margin: 5,
    borderWidth: 1, fontFamily: "EncodeSans",
    paddingLeft: 20,
    backgroundColor: "white",
    borderRadius: 15,
    // width: "100%",
  },
});