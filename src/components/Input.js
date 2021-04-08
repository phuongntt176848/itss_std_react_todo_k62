import React, { useState } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input( props ) {
  
  const [todo, setTodo] = useState('');
  
  const handleKeyDown = (e) => {
    if (e.key === 'ENTER' || e.keyCode === 13) {
      props.onAddTodo(todo);
      setTodo('')
    }
  }

  return (
    <div className="panel-block">
      <input 
        type="text" 
        className="input"
        placeholder="TODOを入力してください"
        onChange={(e) =>{setTodo(e.target.value);} } 
        onKeyDown={(e) => handleKeyDown(e)}
        value={todo}
      />
    </div>
  );
}

export default Input;