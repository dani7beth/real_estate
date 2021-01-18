import React from "react";
import { useState } from "react";
import Axios from "axios";

export const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const handleRegister = async (user, history) => {
    try {
      setLoading(true);
      let res = await Axios.post("/api/auth", user);
      console.log("user: ", res.data.data);
      setUser(res.data.data);
      setLoading(false);
      history.push("/");
    } catch (err) {
      alert(
        "Error occurred while attempting to register user. Please Debug for more information"
      );
      setLoading(false);
    }
  };

  const handleLogin = async (user, history) => {
    try {
      setLoading(true);
      let res = await Axios.post("/api/auth/sign_in", user);
      setUser(res.data.data);
      setLoading(false);
      history.push("/");
      console.log(res.data.data.email);
    } catch (err) {
      alert(
        "Error occurred while attempting to Login user. Please Debug for more information"
      );
      setLoading(false);
    }
  };

  const handleLogout = async (history) => {
    // debugger
    try {
      await Axios.delete("/api/auth/sign_out");
      setUser(null);
      history.push("/login");
    } catch (err) {
      alert(
        "Error occurred while attempting to Logout user. Please Debug for more information"
      );
    }
  };

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const auth = {
    ...user,
    loading,
    handleRegister,
    handleLogin,
    handleLogout,
    authenticated: user !== null,
    setUser,
  };

  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  );
};
export default AuthProvider;
