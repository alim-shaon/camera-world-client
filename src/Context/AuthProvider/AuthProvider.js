import React, { createContext } from "react";
import useFirebase from "../../Hookis/useFirebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const allContect = useFirebase();
  return (
    <AuthContext.Provider value={allContect}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
