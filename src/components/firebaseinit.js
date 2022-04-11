import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'
import 'firebase/storage'

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default {firebaseApp, db}