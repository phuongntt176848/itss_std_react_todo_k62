import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyB4ITiGExsK_IMN38we-YK8Ro0CK0UEadE",
  authDomain: "fb-sample-2e93f.firebaseapp.com",
  projectId: "fb-sample-2e93f",
  storageBucket: "fb-sample-2e93f.appspot.com",
  messagingSenderId: "808713519901",
  appId: "1:808713519901:web:7629dbb190c3a1d24e97f4"
};
firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();
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