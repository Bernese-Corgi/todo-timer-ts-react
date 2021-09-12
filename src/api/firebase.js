import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/* --------------------------------- config --------------------------------- */
const {
  REACT_APP_FB_API_KEY,
  REACT_APP_FB_AUTH_DOMAIN,
  REACT_APP_FB_PROJECT_ID,
  REACT_APP_FB_STORAGE_BUCKET,
  REACT_APP_FB_MESSAGE_ID,
  REACT_APP_FB_APP_ID,
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_FB_API_KEY,
  authDomain: REACT_APP_FB_AUTH_DOMAIN,
  projectId: REACT_APP_FB_PROJECT_ID,
  storageBucket: REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FB_MESSAGE_ID,
  appId: REACT_APP_FB_APP_ID,
};

/* --------------------------- Initialize Firebase -------------------------- */
firebase.initializeApp(firebaseConfig);

/* ----------------------------- export modules ----------------------------- */
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// export default firebase;

/* ---------------------------- language setting ---------------------------- */ 
auth.useDeviceLanguage();

/* -------------------------- Google Auth Provider -------------------------- */
// LINK https://firebase.google.com/docs/auth/web/google-signin?hl=ko
const googleProvider = new firebase.auth.GoogleAuthProvider();
// ANCHOR setCustomParameters 내부 prompt??
// googleProvider.setCustomParameters({ prompt: 'select_accout' });

// sign in function
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const googleUser = auth.currentUser;
console.log(googleUser)

// sign out function
export const signOut = () => auth.signOut();


