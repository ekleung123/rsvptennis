import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";  
import { db } from "../firebase/config";
import { 
  getCountFromServer, 
  collection, 
  query, 
  where,
} from "firebase/firestore";

export const useGetBookingCount = () => {
  const store = useContext(AuthContext); 

  useEffect(() => {
    const getBookingCount = async () => {
      try {
        let ref = collection(db, "timeslots"); 
        let q = query(ref, where("user", "==", store.user));
        const snapshot = await getCountFromServer(q);
        console.log("Home.js | db accessed");
        store.setAmountBooked(snapshot.data().count);
      }
      catch {
        console.log("NO DB found");
      }
    };
    getBookingCount();
  }, []);  
};