import { Alert, Platform } from "react-native";

export function PopupAlert(alertMsg){
  if (Platform.OS == "web"){
    alert(alertMsg);
  } else {
    Alert.alert("RSVP Tennis", alertMsg, [{
      text: "Close", 
      onPress: () => null, 
      style: "cancel"
    }]);
  };
};