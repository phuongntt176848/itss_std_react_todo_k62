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
export const db_user = firebase.firestore().collection("users");
export const storageImage = firebase.storage().ref();
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
  signInFlow: 'popup',
  signInSuccessUrl: "/",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
}

export const storeUserInfo = async (user) => {
  const { uid } = user;
  const userDoc = await database.collection("users").doc(uid).get();
  if (!userDoc.exists) {
    await database.collection("users").doc(uid).set({ name: user.displayName });
    return {
      name: user.displayName,
      id: uid,
    };
  } else {
    return {
      id: uid,
      ...userDoc.data(),
    };
  }
}

export const updateUser = async (user, image) => {
  try {
    const userDoc = await firebase.firestore().collection("users").doc(user.id).get();
    if (userDoc.exists) {
      await firebase.firestore().collection("users").doc(user.id).update({ ...userDoc.data(), image: image });
    }
  } catch (err) {
    console.log(err);
  }
}

export const uploadFile = async (image) => {
  
  const ref = storageImage.child(`/images/${image.name}`);
  let downloadURL = "";
  try {
    
    await ref.put(image);
    downloadURL = await ref.getDownloadURL();
    
  } catch(error) {
    console.log(error);
  }
  return downloadURL;
}
