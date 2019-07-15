import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA-WSw7fsD1_LTERT8MDbQYBPKrEHJ1S7c",
    authDomain: "estudosiniciais.firebaseapp.com",
    databaseURL: "https://estudosiniciais.firebaseio.com",
    projectId: "estudosiniciais",
    storageBucket: "estudosiniciais.appspot.com",
    messagingSenderId: "897428052148"
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();