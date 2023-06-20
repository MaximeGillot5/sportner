import React from "react";
import { useAtom } from "jotai";
import { userAtom } from "../atom";

function Logout() {
  const [, setUser] = useAtom(userAtom);

  const handleLogout = () => {
    setUser({
      id: "",
      isLoggedIn: false,
      userData: null,
    });

    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("email");
  };

  return <button onClick={handleLogout}>Déconnexion</button>;
}

export default Logout;
