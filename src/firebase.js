import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBB0Tp7y0G0LBKEMhXToHVwWE_SQS4pyQ0",
  authDomain: "project-scheduler-dev.firebaseapp.com",
  projectId: "project-scheduler-dev",
  storageBucket: "project-scheduler-dev.appspot.com",
  messagingSenderId: "621789147129",
  appId: "1:621789147129:web:9e2e333669dda1d7bd9728",
  measurementId: "G-VBBS6CJZ2L"
}

export const app = firebase.initializeApp(firebaseConfig)
export const auth = app.auth()
export const db = app.firestore()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
