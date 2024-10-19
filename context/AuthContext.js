import { createContext, useState } from "react";
  
export const AuthContext = createContext("");

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState("");
  const [amountBooked, setAmountBooked] = useState(0);

  return (
    <AuthContext.Provider 
      value={{ user, setUser, amountBooked, setAmountBooked }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};