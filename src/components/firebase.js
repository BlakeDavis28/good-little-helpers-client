import app from 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyDcmAiyICoqOFt6c_pKcjSKWgPMymiJu2c",
    authDomain: "good-little-helpers-7e963.firebaseapp.com",
    databaseURL: "https://good-little-helpers-7e963.firebaseio.com",
    projectId: "good-little-helpers-7e963",
    storageBucket: "good-little-helpers-7e963.appspot.com",
    messagingSenderId: "102882403053",
    appId: "1:102882403053:web:54399cb275f48f2f1be2e4",
    measurementId: "G-3KLR0N9QX3"
};

const fire = app.initializeApp(config)
const db = app.database()

export {db, fire as default};
