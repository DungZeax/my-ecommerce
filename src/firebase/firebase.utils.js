import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAFP60LGJM9xvi83oKlzXErsIhzu55nfv0",
  authDomain: "dung-ecom.firebaseapp.com",
  databaseURL: "https://dung-ecom.firebaseio.com",
  projectId: "dung-ecom",
  storageBucket: "dung-ecom.appspot.com",
  messagingSenderId: "386378330505",
  appId: "1:386378330505:web:0ff032b7ee580939e6b158",
  measurementId: "G-GC0Q0V894E",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
