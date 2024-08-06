// Import the necessary functions from the SDKs
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
require('dotenv').config()

console.log(process.env);

// Your web app's Firebase configuration
const functions = require('firebase-functions');
const { getSecretValue } = require('./secrets'); // Assuming 'secrets.js' is in the same directory

exports.myFunction = functions.https.onRequest(async (req, res) => {
  const secretValue = await getSecretValue(
    'projects/watt-swap/secrets/firebase-config/versions/latest'
  );
  // Use the secretValue in your function logic
  res.send('Secret value: ' + secretValue);
});


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, analytics };
