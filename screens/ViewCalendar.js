import { Text, View, StyleSheet } from "react-native";
import ScreenAlert from "../components/ScreenAlert";
import { Calendar } from 'react-native-calendars';
import { useCreateCalendarObj } from "../hooks/useCreateCalendarObj";
import { STARTDATE, OVERBOOKEDMSG } from "../constants/constants";
import NavButton from "../components/NavButton";

import { useContext, useEffect } from "react"; 
import { AuthContext } from "../context/AuthContext";  

export default function ViewCalendar(props) {
  const store = useContext(AuthContext);
  let calendarObj = useCreateCalendarObj(STARTDATE);

  return (
    <View style={styles.screenContainer}>


      { (store.amountBooked !== 2) && (
        <Text style={styles.text}>
          <Text style={styles.bold}>Reminder:</Text> You're limited to two reservations at a time.  
        </Text>
      )}

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

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 12, 
  },
  bold: {
    fontWeight: "bold"
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
    backgroundColor: '#ffffff',
    calendarBackground: '#778899',
    textSectionTitleColor: '#ffffff',
    textSectionTitleDisabledColor: '#ffffff',
    selectedDayBackgroundColor: '#ffffff',
    selectedDayTextColor: '#ffffff',
    todayTextColor: '#00adf5',
    dayTextColor: 'white',
    textDisabledColor: 'gray',
    dotColor: '#00adf5',
    selectedDotColor: '#ffffff',
    arrowColor: 'white',
    disabledArrowColor: '#d9e1e8',
    monthTextColor: 'white',
    indicatorColor: 'white',
    textDayFontFamily: 'monospace',
    textMonthFontFamily: 'Verdana',
    textDayHeaderFontFamily: 'monospace',
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 36,
    textDayHeaderFontSize: 16
  }
});