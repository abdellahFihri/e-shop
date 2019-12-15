import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAKZ0Dgq5oxNHrW-LPhMMV_Tw-kpbRfGzo",
  authDomain: "fihri-e-shop.firebaseapp.com",
  databaseURL: "https://fihri-e-shop.firebaseio.com",
  projectId: "fihri-e-shop",
  storageBucket: "fihri-e-shop.appspot.com",
  messagingSenderId: "389040575267",
  appId: "1:389040575267:web:0bd977a2af1a82dd153296",
  measurementId: "G-S0K7DGSYHJ"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
