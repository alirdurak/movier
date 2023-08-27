import { initializeApp } from "firebase/app";
import { store } from "@/redux/store";
import { change } from "@/redux/slices/auth-slice";
import toast from "react-hot-toast";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNb6oDPRO0Eiqqez3Qvtb7AMRlXcpHMtI",
  authDomain: "movier-bdf16.firebaseapp.com",
  projectId: "movier-bdf16",
  storageBucket: "movier-bdf16.appspot.com",
  messagingSenderId: "1021326685651",
  appId: "1:1021326685651:web:a5070ade47a40156d06b26",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

// Kullanıcı durumunu tutan değişkeni tanımlayın
export let user = auth.currentUser;

export const signUp = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      user = userCredential.user;
      store.dispatch(change(user));
      toast.success("You have successfully Signed Up");
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      toast.error(errorMessage);
    });

export const signIn = (email, password) =>
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Giriş işlemi başarılı oldu, kullanıcı bilgisini güncelleyin
      user = userCredential.user;
      store.dispatch(change(user));
      toast.success("You have successfully Logged In");
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      toast.error(errorMessage);
    });

export const out = () => {
  try {
    signOut(auth);
    user = null;
    store.dispatch(change(null));
    toast.success("You have successfully Logged Out");
  } catch (error) {
    console.log(error);
    toast.error(errorMessage);
  }
};

export const googleAuth = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      store.dispatch(change(user));
      // IdP data available using getAdditionalUserInfo(result)
      toast.success("You have successfully Logged In");
      return token;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      toast.error(errorMessage);
      // ...
    });
