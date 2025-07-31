import React from "react";
import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import TimeSlot from "../components/TimeSlot";
import LoadingSpinner from "../components/LoadingSpinner";
import NavButton from "../components/NavButton";
import ConfirmButton from "../components/ConfirmButton";
import { useMakeBooking } from "../hooks/useMakeBooking";
import { useFocusEffect } from '@react-navigation/native';

export default function ConfirmBooking(props){
  const params = props.route.params;
  const { 
    makeBooking, 
    isLoading, 
    success, 
    setSuccess 
  } = useMakeBooking();

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setSuccess(0);
      };
    }, [])
  );

  let responseMsg, type, pageHeader;
  switch (success){
    case 0:
      responseMsg = "Are you sure you want to book this timeslot?";
      type = "confirm_book";
      pageHeader = "Confirming";
      break;
    case 1: 
      responseMsg = "You've successfully reserved this timeslot!";
      type = "confirmed_booked";
      pageHeader = "Confirmed"
      break;
    case -1: 
      responseMsg = "FAILED - Sorry, there's been a database error.  Please try again later.";
      type = "deleted";
      break;
  };

  return (
    <View style={styles.screenContainer}>
      { isLoading && <LoadingSpinner /> }
      <Text style={styles.pageHeader}>{pageHeader}</Text>
      <Text style={styles.text}>{ responseMsg }</Text>
      <View>
        <TimeSlot 
          court={params.court}
          day={params.day}
          time={params.time}
          key={params.id}
          id={params.id}          
          type={type}          
        />
      </View>
      <View style={{marginTop: 20}}>
      { (success == 0) && (
        <Pressable onPress={() => makeBooking(params.id, params.user)}>
          <ConfirmButton />
        </Pressable>
      )}
      { (success == 0) && <NavButton type={"no-home"} /> }
      { (success == 1) && <NavButton type={"home"} /> }
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
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16
  },
  pageHeader: {
    fontFamily: "Trocchi",
    fontSize: 24,
  },
});