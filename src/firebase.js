import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBRCy3pC-c4b7wtLu6yAMO1bDFoOaSJEz8",
    authDomain: "goalcoach-385c9.firebaseapp.com",
    databaseURL: "https://goalcoach-385c9.firebaseio.com",
    projectId: "goalcoach-385c9",
    storageBucket: "",
    messagingSenderId: "997827257417"
};

export const firebaseApp  = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');