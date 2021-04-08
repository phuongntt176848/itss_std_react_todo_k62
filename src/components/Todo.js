import React, { useState } from 'react';

/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import {getKey} from "../lib/util";

function Todo() {
  const [items, putItems] = useState([
      /* テストコード 開始 */
    { key: getKey(1), text: '日本語の宿題', done: false },
    { key: getKey(2), text: 'reactを勉強する', done: false },
    { key: getKey(3), text: '明日の準備をする', done: false },
    /* テストコード 終了 */
  ]);
  
  const onChangeStatus = (key) => {
    
    const index = items.findIndex((item) => item.key === key);
    if (index !== -1) {
      items[index] = {...items[index], done: !items[index].done}
      putItems([...items])
    }
  }
  
  const addTodo = (todo) => {
    const item = {
      key: getKey(4),
      text:todo,
      done: false
    };
    
    items.push(item);
    
    putItems([...items]);
  }

  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      <Input 
        onAddTodo={addTodo}
      />
      {items.map(item => (
        <TodoItem 
          key={item.key} 
          item={item} 
          changeStatus={onChangeStatus} 
          classChange={item.done?'has-text-grey-light':''}
        />
      ))}
      <div className="panel-block">
        {items.length} items
      </div>
    </div>
  );
}

export default Todo;