import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD98TXQr_bEMxs4gAYnN3OezAaqI0EtkQE",
  authDomain: "fir-sample-444b2.firebaseapp.com",
  projectId: "fir-sample-444b2",
  storageBucket: "fir-sample-444b2.appspot.com",
  messagingSenderId: "783870879516",
  appId: "1:783870879516:web:ef91aa0b5f27e9a5497cd9"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();
export const db_user = firebase.firestore().collection("user");
export const auth = firebase.auth();
export default firebase;

export const getTodos = async () => {
  try {
    
    const items = await database.collection('todos').get();
    
    const todos = items.docs.map(
     (doc) => ({...doc.data(), id: doc.id})
     );
    
    return todos;
    
  } catch(error) {
    console.log(error);
    
    return [];
  }
  
}

export const addTodo = async (item) => {
  
  try {
    
    const ref = database.collection('todos');
    await ref.add(item);
    
  } catch(error) {
    console.log(error);
    return;
  }
  
}

export const updateTodo = async (item) => {
  
  try {
    
    const ref = database.collection('todos').doc(item.id);
    await ref.update(item);
    
  } catch(error) {
    console.log(error);
  }
  
}

export const removeTodo = async (item) => {
  
  try {
    console.log(item);
    const ref = database.collection('todos').doc(item.id);
    await ref.delete().then(() => {
      console.log('');
    }).catch((error)=>{
      console.log(error);
    });
    
  } catch(error) {
    console.log(error);
  }
  
}

export const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
};

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/8.6.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>

// npm install -g firebase-tools
