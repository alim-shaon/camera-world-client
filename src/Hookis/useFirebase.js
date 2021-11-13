import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  getIdToken,
} from "firebase/auth";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [token, setToken] = useState("");
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();

  // register with user email and password
  const registerUser = (email, password, displayName, navigate) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        // showing the user name and email for first time
        const newUser = { email, displayName: displayName };
        setUser(newUser);

        // function call to save user to database
        saveToDatabase(email, displayName, "POST");

        // sending username to firebase for later use
        updateProfile(auth.currentUser, {
          displayName: displayName,
        })
          .then(() => {})
          .catch((error) => {});
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  //   login using email and password
  const loginUsingEmail = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // redirect to desired page
        const destination = location?.state?.from || "/home";
        navigate(destination);
        setAuthError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  //   logout function
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  };

  //   observer which observe user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);

        // jwt token
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  // loading admin data
  useEffect(() => {
    fetch(`https://rocky-plateau-46145.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  //   sending data to backend to save to database
  const saveToDatabase = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://rocky-plateau-46145.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    user,
    token,
    isLoading,
    authError,
    admin,
    registerUser,
    loginUsingEmail,
    logOut,
  };
};
export default useFirebase;
