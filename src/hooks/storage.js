// import { useState, useEffect } from 'react';

// /* 
//   【Storageフック】
// 　・TodoをlocalStorageを使って保存する
// 　・以下機能をサポートする
// 　  - localstrageに保存されているすべてのTodoの読み出し機能
// 　  - Todoをlocalstrageに保存する
// 　  - localstrageにあるTodoを削除する
// */

// /* ライブラリ */
// import {getKey} from "../lib/util";

// const STORAGE_KEY = 'itss-todo';

// function useStorage() {
//   const [items, setItems] = useState([]);
　
// 　/* 副作用を使う */
//   useEffect(() => {
//     let todos = JSON.parse(localStorage.getItem('todos')) || items;
//     setItems(todos);
//   }, []);

//   const putItems = items => {
//     localStorage.setItem('todos', JSON.stringify(items));
//     setItems(items);
//   };

//   const clearItems = () => {
//     localStorage.removeItem('todos');
//     setItems([]);
//   };

//   return [items, putItems, clearItems];
// }

// export default useStorage;