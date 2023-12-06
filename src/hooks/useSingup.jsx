import { auth } from "../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import useGlobalContext from "./useGlobalContext";

function useSingup() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch } = useGlobalContext();
  const singup = (displayName, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (user) => {
        await updateProfile(auth.currentUser, {
          displayName,
        });
        dispatchEvent({ type: "LOGIN", payload: user });
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(errorCode, errorMessage);
      });
  };

  return { user, error, singup };
}

export default useSingup;
