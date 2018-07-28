import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyDfChryFf9ERaEQz2RgyyN4VzkPKAEzuqY",
    authDomain: "vegan-recipe-finder.firebaseapp.com",
    databaseURL: "https://vegan-recipe-finder.firebaseio.com",
    projectId: "vegan-recipe-finder",
    storageBucket: "",
    messagingSenderId: "1056656932624"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const docRef = firestore.doc("users/savedRecipes");

export default { auth, docRef };