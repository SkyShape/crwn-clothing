import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCk8ml_R1__iyU21swkKkjCem4uZrBgxLs",
    authDomain: "crwn-db-571df.firebaseapp.com",
    projectId: "crwn-db-571df",
    storageBucket: "crwn-db-571df.appspot.com",
    messagingSenderId: "176429994348",
    appId: "1:176429994348:web:f586f5ecfa5e846016a349",
    measurementId: "G-Q39MVWG43P"
  }

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)