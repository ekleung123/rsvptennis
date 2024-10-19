import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

// React Navigation
import { 
  NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Import Screens
import Home from "./screens/Home"
import LogIn from "./screens/LogIn";
import ViewCalendar from "./screens/ViewCalendar";
import YourBookings from "./screens/YourBookings"
import ShowAvailability from "./screens/ShowAvailability";
import LogOut from "./screens/LogOut";
import ConfirmBooking from "./screens/ConfirmBooking";
import ConfirmDelete from "./screens/ConfirmDelete";
import CustomDrawer from "./components/CustomDrawer";
import Overbooked from "./screens/Overbooked";

// Context
import { useContext } from "react"; 
import { AuthContext } from "./context/AuthContext";  

import { Entypo } from '@expo/vector-icons'; 

function NavTree() {
  const store = useContext(AuthContext);
  const Drawer = createDrawerNavigator();

  const MyTheme = {
    dark: false,
    colors: {
      primary: 'black',
      // background: '#fadd8e',
      background: '#fadd8e',
      card: '#faefd2',
      text: 'black',
      border: '#97cba9',
      notification: 'red',
    }
  };

  return (
    <NavigationContainer theme={MyTheme} >        
      <Drawer.Navigator 
        screenOptions={{
          headerShown: true,
          headerStyle: {
            height: 80,
          },
          drawerStyle: {
            width: 280,
          },
          drawerLabelStyle: {
            fontSize: 16,
            fontFamily: "EncodeSans",
            fontWeight: "bold",
            marginLeft: -25,
          }
        }}
      > 
        <Drawer.Screen 
          name={"LogIn"} 
          component={LogIn}
          options={{
            headerShown: false,
            drawerItemStyle: {height: 0},
            swipeEnabled: false,
          }}          
        />  
        <Drawer.Screen 
          name="Home" 
          component={Home}  
          options = {{
            drawerIcon: () => (
              <Entypo name="home" size={22} color="black" />
            ),
          }}     
        />  
        <Drawer.Screen 
          name="Make Booking" 
          component={ViewCalendar}
          options = {{
            drawerIcon: () => (
              <Entypo name="pencil" size={22} color="black" />
            ),
          }} 
        />
        <Drawer.Screen 
          name={"Your Bookings"}
          component={YourBookings} 
          options = {{
            title: "Your Bookings (" + store.amountBooked + ")",
            drawerIcon: () => (
              <Entypo name="open-book" size={22} color="black" />
            ),
          }} 
        />
        <Drawer.Screen 
          name={"Log Out " + store.user}  
          component={LogOut}
          options = {{
            drawerIcon: () => (
              <Entypo name="hand" size={22} color="black" />
            ),
          }} 
        />
        <Drawer.Screen 
          name="Show Availability" 
          component={ShowAvailability}
          options={{
            drawerItemStyle: {height: 0},                   
          }}
        />
        <Drawer.Screen 
          name="Confirm Booking" 
          component={ConfirmBooking}
          options={{
            drawerItemStyle: {height: 0},                   
          }}
        /> 
        <Drawer.Screen 
          name="Confirm Delete" 
          component={ConfirmDelete}
          options={{
            drawerItemStyle: {height: 0},                   
          }}
        />
        <Drawer.Screen 
          name="Overbooked" 
          component={Overbooked}
          options={{
            drawerItemStyle: {height: 0},                   
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer> 
  );
};

export default NavTree;