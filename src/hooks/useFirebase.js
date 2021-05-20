import { useState, useEffect } from 'react';

import { getTodos, addTodo, updateTodo, removeTodo } from '../lib/firebase';

/* ライブラリ */
function useFirebase() {
  const [items, setItems] = useState([]);
　
　/* 副作用を使う */
  useEffect(() => {
    const getItems = async () => {
      let todos = await getTodos() || [];
      setItems(todos);
    }
    
    getItems();
  }, []);

  const putItems = item => {
    const todos = items;
    
    addTodo(item);
    todos.push(item);
    
    setItems([...todos]);
  };
  
  const updateItem = (item) => {
    
    const todos = items;
    updateTodo(item);
    const index = todos.findIndex(todo => todo.id === item.id);
    
    todos[index] = { ...todos[index], done: item.done};
    
    setItems([...todos]);
    
  }

  const clearItems = () => {
    const todos = items;
    todos.forEach(item => {
      removeTodo(item);
    })
    setItems([]);
  };

  return [items, putItems, clearItems, updateItem];
}

export default useFirebase;