import * as fb from 'firebase';
import 'firebase/firestore'
require('dotenv').config();

console.log(process.env.FIREBASE_KEY)
const config = {
    apiKey: "AIzaSyCMVlcBIA2z1lV18sUX346fDUC_8gwVRyU",
    authDomain: 'vue-ecomm.firebaseapp.com',
    projectId: 'vue-ecomm',
    databaseURL: "https://vue-ecomm.firebasio.com",
    storageBucket: "vue-ecomm.appspot.com"
}
export const firebase = fb.initializeApp(config);
export const firestore =  fb.firestore();
