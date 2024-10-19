import { useState, useCallback } from "react";
import { db } from "../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { DBERRORNOTICE } from "../constants/constants";
import { useFocusEffect } from '@react-navigation/native';

export const useFetchByDate = (day) => {
  const [timeslots, setTimeslots] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {  
      let ref = collection(db, "timeslots"); 
      let q1 = query(ref, where("day", "==", day));
      let q2 = query(q1, where("user", "==", ""));
      getDocs(q2)
      .then((snapshot) => {
        let results = [];
        snapshot.docs.forEach(doc => {
          results.push({id: doc.id, ...doc.data()});
        });
        
        results.sort(function(a, b){
          if (a.court < b.court) return -1;
          if (b.court > a.court) return 1;
            return 0
          }).sort(function(a,b){
            return a.time - b.time;
        });

        setIsLoading(false);
        setTimeslots(results);
      }, error => {
        setIsLoading(false);
        alert(DBERRORNOTICE);
      });
      return () => { 
        setIsLoading(true);
        setTimeslots(null);
      };
    }, [day])
  );
  
  // console.log("useFetchByDate.js | db accessed");
  return {timeslots, isLoading};
};