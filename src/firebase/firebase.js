import firebase from 'firebase/app' // allways import firebase then the scripts you need
import 'firebase/firestore'
import 'firebase/auth'

const config={
    apiKey: "AIzaSyAKZ0Dgq5oxNHrW-LPhMMV_Tw-kpbRfGzo",
    authDomain: "fihri-e-shop.firebaseapp.com",
    databaseURL: "https://fihri-e-shop.firebaseio.com",
    projectId: "fihri-e-shop",
    storageBucket: "fihri-e-shop.appspot.com",
    messagingSenderId: "389040575267",
    appId: "1:389040575267:web:0bd977a2af1a82dd153296",
    measurementId: "G-S0K7DGSYHJ"
  }

  firebase.initializeApp(config)

  export const createUserProfileDocument=async (userAuth,additionalData)=>{
    if (!userAuth)return;//no user auth will just return(do nothing)

    const userRef=firestore.doc(`users/${userAuth.uid}`) // this gets all the object of the user will generate each uid of th user that sign in with google
    const snapShot= await userRef.get() // pass it into a snapshot with await(snapshot gets us onlty a representation of data no CRUD)

    if(!snapShot.exists){// will check the exists property which is a boolean 
  const {displayName,email}=userAuth; //deconstructure the properties we need from userAuth
  const createdAt= new Date();//create date of creation of the record
  try{
await userRef.set({displayName,email,createdAt,...additionalData})// will create user  records
  }
  catch (error){
console.log('error creating user', error.message)
  }

    }
   return userRef;   //after all it will still return userRef , we may need it still to do something else
  }

  export const auth=firebase.auth()
  export  const firestore =firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt:'select_account'})

  export const signInWithGoogle=()=> auth.signInWithPopup(provider)//import in sign in n use as a button

  export default firebase
