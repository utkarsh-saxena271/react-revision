import React, { createContext, useContext, useState } from "react";
import { UserContext } from "./UserProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { currentUser, setCurrentUser, existingUsers, setExistingUsers } =
    useContext(UserContext);
  const navigate = useNavigate();

  const login = (email, password) => {
    const user = existingUsers.find((u) => u.email === email);

    if (!user) {
      setIsAuthenticated(false);
      toast.error("User not found!");
      return;
    }

    if (user.password === password) {
      setIsAuthenticated(true);
      setCurrentUser(user); // ✅ update current logged-in user
      toast.success("Logged in successfully!");
      navigate("/dashboard");
    } else {
      setIsAuthenticated(false);
      toast.error("Wrong password!");
    }
  };

  const signup = (userDet) => {
    const isUserAlreadyExists = existingUsers.find(
      (u) => u.email === userDet.email
    );
    if (isUserAlreadyExists) {
      toast.error("User already exists, please login");
      return;
    }
    setExistingUsers([...existingUsers, userDet]);
    toast.success("Signed up successfully, login to proceed!");
    navigate("/login");
  };

  const logout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false); // ✅ reset auth state
    toast.info("Logged out successfully");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, signup, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
