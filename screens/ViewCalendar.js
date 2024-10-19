import { Text, View, StyleSheet } from "react-native";
import ScreenAlert from "../components/ScreenAlert";
import { Calendar } from 'react-native-calendars';
import { useCreateCalendarObj } from "../hooks/useCreateCalendarObj";
import { STARTDATE, OVERBOOKEDMSG } from "../constants/constants";
import NavButton from "../components/NavButton";

import { useContext, useEffect } from "react"; 
import { AuthContext } from "../context/AuthContext";  

function ViewCalendar(props) {
  const store = useContext(AuthContext);
  let calendarObj = useCreateCalendarObj(STARTDATE);

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.pageHeader}>
        Booking Rules
      </Text>
      <Text style={styles.text}>
        Reservations can only be made two weeks in advance.  
        You're permitted to hold only two reservations at a time.  
      </Text>
      <Text style={styles.text}>
        Please select from one of the highlighted dates below.
      </Text>
      { (store.amountBooked == 2) && <ScreenAlert msg={OVERBOOKEDMSG} /> }
        <Calendar
          current={STARTDATE}
          markedDates={calendarObj}
          style={styles.calendarStyle}
          theme={styles.calendarTheme}  
          onDayPress={day => {
            props.navigation.navigate("Show Availability", day);
          }}
      />
      <NavButton type="home" />
    </View>
  );
};

export default ViewCalendar;  

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
  calendarStyle: {
    borderRadius: 15,
    padding: 5,
  },
  calendarTheme: {
    backgroundColor: 'red',
    calendarBackground: "#7FBC7A",
    textSectionTitleColor: '#b6c1cd',
    selectedDayBackgroundColor: '#00adf5',
    selectedDayTextColor: '#ffffff',
    todayTextColor: '#00adf5',
    dayTextColor: 'white',
    margin: 10,
    textSectionTitleColor: 'white',
    monthTextColor: 'white',
    textMonthFontSize: 22,
    textMonthFontFamily: 'DelaGothicOne',
    arrowColor: 'red',
    disabledArrowColor: 'red',
  }
});