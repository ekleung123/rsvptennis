import { useState, useContext, useEffect } from "react"; 
import { AuthContext } from "../context/AuthContext";  

import { db } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";

export const useMakeBooking = () => {
  const store = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(0);
  // 0 default, 1 successful booking, 2 database error

  const makeBooking = async (id, user) => {
    setIsLoading(true);

    let ref = doc(db, "timeslots", id);
    let data = {user: user};

    try {
      await setDoc(ref, data, {merge: true});
      setSuccess(1);
      setIsLoading(false);
      store.setAmountBooked(store.amountBooked + 1);
    } catch {
      setIsLoading(false);
      setSuccess(-1);
    };
  };  

  return {makeBooking, isLoading, success, setSuccess};
};