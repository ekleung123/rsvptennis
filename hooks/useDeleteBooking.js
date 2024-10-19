import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext"; 

import { db } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";

export const useDeleteBooking = () => {
  const store = useContext(AuthContext);

  const [isDeleting, setIsDeleting] = useState(false);
  const [success, setSuccess] = useState(0);
  // 0 default, 1 successful delete, 2 database error

  const deleteBooking = async (id) => {
    try {  
      setIsDeleting(true);
      let ref = doc(db, "timeslots", id);
      let data = {user: ""};

      await setDoc(ref, data, {merge: true});
      setSuccess(1);
      setIsDeleting(false);
      store.setAmountBooked(store.amountBooked - 1);
    }
    catch {
      setIsDeleting(false);
      setSuccess(-1);
    };
  };
  
  return {deleteBooking, isDeleting, success, setSuccess}
};