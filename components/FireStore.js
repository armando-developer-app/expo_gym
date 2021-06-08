import firebaseConfig from "../config/firebaseConfig";
import * as firebase from 'firebase'
import 'firebase/firestore'

class FirestoreModule {
    static myInstance = null

    static getInstance() {
        console.log("[INFO]: getInstance | FirestoreModule")
        if (FirestoreModule.myInstance == null) {
            FirestoreModule.myInstance = new FirestoreModule();
        }

        return this.myInstance;
    }

    initFirebase() {
        console.log("[INFO]: initFirebase")
        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }
    }

    getFirestore() {
        console.log("[INFO]: getFirestore")
        if (!firebase) {
            this.initFirebase()
        }

        return firebase.firestore();
    }

    addCollection(collection, document, data) {
        console.log("[INFO]: addCollection")
        const firestore = this.getFirestore()
        firestore.collection(collection).doc(document).set(data)
    }

    deleteCollection(collection, document) {
        console.log("[INFO]: deleteCollection")
        const firestore = this.getFirestore()
        firestore.collection(collection).doc(document).delete().then(() => {
            console.log("Document successfully deleted!")
        }).catch((error) => {
            console.error("Error removing document: ", error)
        })
    }
}

export default FirestoreModule