import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { DBERRORNOTICE } from "../constants/constants";

export const useFetchBooked = () => {
  const [timeslots, setTimeslots] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ref = collection(db, "timeslots"); 
    let q = query(ref, where("user", "==", "jjohnson"));
    const unsub = onSnapshot(q, snapshot => {
      let results = [];
      snapshot.docs.forEach(doc => {
        results.push({id: doc.id, ...doc.data()});
      });
      setTimeslots(results);
      setIsLoading(false);
    }, error => {
      setIsLoading(false);
      alert(DBERRORNOTICE);
    });
    return () => unsub();
  },[]);
  
  console.log("useFetchBooked | db accessed");
  return {timeslots, isLoading};
};