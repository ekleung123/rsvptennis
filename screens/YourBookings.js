import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import TimeSlot from "../components/TimeSlot";
import LoadingSpinner from "../components/LoadingSpinner";
import { useFetchBooked } from "../hooks/useFetchBooked";
import NavButton from "../components/NavButton";

import { useContext, useEffect } from "react"; 
import { AuthContext } from "../context/AuthContext";  

function YourBookings(props) {
  const store = useContext(AuthContext);
  const {timeslots, isLoading} = useFetchBooked();

  const deleteButtonHandler = (id, court, day, time) => {
    props.navigation.navigate("Confirm Delete", {
      id, court, day, time, user: store.user
    });
  };

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.pageHeader}>Your Bookings</Text>
      <View style={styles.body}>     
        { isLoading && <LoadingSpinner /> }
        { (!isLoading && timeslots.length == 0) && <Text style={styles.text}>You don't have any bookings.</Text> }
        { (!isLoading && timeslots.length > 0) && <Text style={styles.text}>Looking forward to seeing you!  Remember to delete any booking and release the timeslot to others if you no longer need it.</Text> }
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
              buttonHandler={deleteButtonHandler}
              buttonText={"Delete Booking"}
              type="booked"
            />
          )) 
        }
      </View>
      <NavButton type="home" />
    </View>
  );
};

export default YourBookings;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 12,
  },
  text: {
    fontFamily: "EncodeSans",
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16
  },
  pageHeader: {
    fontFamily: "Trocchi",
    fontSize: 28,
  },
  body: {
    marginTop: 10,
  },
});