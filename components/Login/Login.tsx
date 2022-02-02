import { useAuthContext } from "../../hooks/useAuthContext";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const Login = () => {
  const { user } = useAuthContext();

  const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  };

  if (user) return null;

  return (
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  );
};
