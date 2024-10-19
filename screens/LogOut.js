import { useContext, useEffect } from "react"; 
import { AuthContext } from "../context/AuthContext";

function LogOut(props) {
  const store = useContext(AuthContext);

  useEffect(() => {
    store.setUser("");
  });

};

export default LogOut;