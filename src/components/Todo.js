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
import ClearButton from './ClearButton';

/* カスタムフック */
import useFirebase from '../hooks/useFirebase';

/**/

function Todo() {
  const [items, putItems, clearItems, updateItem ] = useFirebase();
  
  const [filter, setFilter] = useState(0);
  
  let itemRender = items || [];
  
  const onChangeStatus = (key) => {
    
    const index = items.findIndex((item) => item.id === key);
    if (index !== -1) {
      items[index] = {...items[index], done: !items[index].done}
      updateItem(items[index]);
    }
  }
  
  const clearTodos = () => {
    clearItems();
  }
  
  const addTodo = (todo) => {
    const item = {
      text:todo,
      done: false
    };
    
    putItems(item);
  }
  
  const filterTodo = (filter) => {
    setFilter(filter);
  }
  
  switch (filter) {
    case 1:
      // code
      itemRender = items.filter((item)=>{
        return item.done === true;
      })
      break;
    case -1:
      itemRender = items.filter((item)=>{
        return item.done === false;
      })
      break;
    default:
      // code
  }
  
  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      <Input 
        onAddTodo={addTodo}
      />
      
      <Filter
        onFilterTodo={filterTodo}
      />
      {itemRender&&itemRender.map(item => (
        <TodoItem 
          key={item.id} 
          item={item} 
          changeStatus={onChangeStatus} 
          classChange={item.done?'has-text-grey-light':''}
        />
      ))}
      <div className="panel-block">
        {itemRender&& `${itemRender.length} items`}
      </div>
      
      <ClearButton 
        onClearTodos={clearTodos}
      />
    </div>
  );
}

export default Todo;