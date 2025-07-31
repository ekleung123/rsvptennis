import { useContext, useEffect } from "react"; 
import { AuthContext } from "../context/AuthContext";

export default function LogOut(props) {
  const store = useContext(AuthContext);

  useEffect(() => {
    store.setUser("");
  });
};