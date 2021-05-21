import React from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function ClearButton( props ) {

  const {onClearTodos} = props;

  return (
    <div className="panel-block">
      <button type="button" className="button is-danger is-fullwidth" onClick={onClearTodos} >
        全てのToDoを削除
      </button>
    </div>
  );
}

export default ClearButton;