import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyA3gNnYIpVzwpyv42vPE3Q09aQ3G5tkH-8",
  authDomain: "crw-clothing-b73ac.firebaseapp.com",
  projectId: "crw-clothing-b73ac",
  storageBucket: "crw-clothing-b73ac.appspot.com",
  messagingSenderId: "1059874772888",
  appId: "1:1059874772888:web:4fbc0fa3b1aaef3b8e7ded",
  measurementId: "G-NZGTHKD423"
  }

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef;

}

firebase.initializeApp(firebaseConfig)


export const auth = firebase.auth()
export const firestore = firebase.firestore()
firebase.firestore().enablePersistence()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)