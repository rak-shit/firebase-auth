import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDUpI28jsvXzjykJvH22X7nhHsgZyUVOWs",
    authDomain: "notes-app-b02b2.firebaseapp.com",
    databaseURL: "https://notes-app-b02b2.firebaseio.com",
    projectId: "notes-app-b02b2",
    storageBucket: "notes-app-b02b2.appspot.com",
    messagingSenderId: "927590782151",
    appId: "1:927590782151:web:8d0c441573add5759f5ae2",
    measurementId: "G-F97KYYFPV4"
};

const fire = firebase.initializeApp(firebaseConfig)
export default fire
