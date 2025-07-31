import { Text, View, StyleSheet } from "react-native";
import TimeSlot from "../components/TimeSlot";
import NavButton from "../components/NavButton";
import LoadingSpinner from "../components/LoadingSpinner";
import ScreenAlert from "../components/ScreenAlert";
import { OVERBOOKEDMSG } from "../constants/constants";

// Hooks
import { useFetchByDate } from "../hooks/useFetchByDate";
import { PopupAlert } from "../components/PopupAlert";

// AuthContext
import { useContext, useEffect } from "react"; 
import { AuthContext } from "../context/AuthContext";  

export default function ShowAvailability(props) {  
  const store = useContext(AuthContext);
  const chosenDate = props.route.params.day;
  const {timeslots, isLoading} = useFetchByDate(chosenDate);
  let amtBooked = store.amountBooked;

  const reserveButtonHandler = (id, court, day, time) => {
    if (amtBooked > 1) {
      props.navigation.navigate("Overbooked");
    } else {
      props.navigation.navigate("Confirm Booking", {
        id, court, day, time, amtBooked, user: store.user
      }); 
    };
  };

  return (
    <View style={styles.screenContainer}>
      { isLoading && <LoadingSpinner /> }
      { (!isLoading && timeslots && timeslots.length == 0) && 
          <Text style={styles.text}>Sorry, no slots are available on this date.</Text>
      }

      { (amtBooked > 1) && <ScreenAlert msg={OVERBOOKEDMSG} /> }

      <View>
        { !isLoading && <Text style={styles.text}>These are the available slots for your chosen date.  Please select the one you wish to reserve.</Text> }
      </View>
      <View>
        {
          timeslots && timeslots.map((val) => (
            <TimeSlot 
              court={val.court}
              day={val.day}
              time={val.time}
              key={val.id}
              id={val.id}
              buttonHandler={reserveButtonHandler}
              buttonText={"Reserve This"}
              buttonVisiblity={true}
              type="available"
            />
          )) 
        }
      </View>
       <View style={{marginTop: 10}}>
        <NavButton type="searchanother" />
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
});