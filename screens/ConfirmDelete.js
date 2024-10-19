import React from "react";
import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import TimeSlot from "../components/TimeSlot";
import LoadingSpinner from "../components/LoadingSpinner";
import NavButton from "../components/NavButton";
import ConfirmButton from "../components/ConfirmButton";
import { useDeleteBooking } from "../hooks/useDeleteBooking";
import { useFocusEffect } from '@react-navigation/native';

function ConfirmDelete(props){
  const params = props.route.params;
  const { 
    deleteBooking, 
    isDeleting, 
    success, 
    setSuccess 
  } = useDeleteBooking();

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
      responseMsg = "Are you sure you want to delete this timeslot?  This action might be irreversible.";
      type = "confirmed_booked"; 
      pageHeader = "Confirming";
      break;
    case 1: 
      responseMsg = "You've successfully deleted this timeslot";
      type = "deleted";
      pageHeader = "Deleted";
      break;
    case -1: 
      responseMsg = "FAILED - Sorry, there's been a database error.  Please try again later.";
      type = "deleted";
      break;
  };

  return (
    <View style={styles.screenContainer}>
      { isDeleting && <LoadingSpinner /> }
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
      <View>
      { (success == 0) && (
        <Pressable onPress={() => deleteBooking(params.id, params.user)}>
          <ConfirmButton />
        </Pressable>
      )}
      { (success == 0) && <NavButton type={"no-home"} /> }
      { (success == 1) && <NavButton type={"home"} /> }
      </View>
    </View>
  );
};

export default ConfirmDelete;

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