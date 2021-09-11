import firebase from "firebase/compat/app";
import 'firebase/auth';
import 'firebase/firestore';


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

const firebase = require('firebase');

/* --------------------------- Initialize Firebase -------------------------- */
firebase.initializeApp(firebaseConfig);

/* ----------------------------- export modules ----------------------------- */
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;

/* ---------------------------- language setting ---------------------------- */ 
auth.useDeviceLanguage();

/* -------------------------- Google Auth Provider -------------------------- */
// LINK https://firebase.google.com/docs/auth/web/google-signin?hl=ko
const googleProvider = new firebase.auth.GoogleProvider();
// ANCHOR setCustomParameters 내부 prompt??
googleProvider.setCustomParameters({ prompt: 'select_accout' });

// sign in function
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

// sign out function
export const signOut = () => auth.signOut();

// sign in persistence setting
auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);

export const setAuthPersist = (value) => {
  let  mode =  '';
  switch (value) {
    default:
      case 'local':
        mode = 'LOCAL';
        break;
      case 'session':
        mode = 'SESSION';
        break;
      case 'none':
        mode = 'NONE';
      }
      auth.setPersistence(firebase.auth.Auth.Persistence[mode])
}

/* -------------------------- email / password auth ------------------------- */
export const signUpWithEmailAndPassword = async (
  email,
  password,
  additionalData = {}
) => {
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    return await createOrGetAuthUser(user, additionalData);
  } catch (error) {
    throw new Error(error.message);
  }
}

/* ----------------------------- Firestore Utils ---------------------------- */
export const createOrGetAuthUser = async (user, additionalData = {}) => {
  if (!user) {
    throw new Error('user 값 입력이 필요합니다.')
  }

  // auth user document reference
  const userRef = firestore.doc(`Users${user.uid}`)
  // auth user document snapshot
  const snapshot = await userRef.get()

  if(!snapshot.exists) {
    try {
      const { uid, displayName, email, photoURL } = user;
      const createdAt = new Date()

      await userRef.set({
        uid, 
        displayName,
        email, 
        photoURL, 
        createdAt, 
        // merge additional data
        ...additionalData,
      })
    } catch (error) {
      throw new Error(error.message);
    }
  }
  return userRef
}

