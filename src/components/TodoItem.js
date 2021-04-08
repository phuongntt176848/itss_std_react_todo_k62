/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem( props ) {
  const {item, classChange} = props;
  
  const changeStatus = (key) => {
    props.changeStatus(key);
  }
  
  return (
    <label 
      className={`panel-block ${classChange}`}
    >
        <input 
          type="checkbox" 
          onClick={()=>{changeStatus(item.key)}} 
          defaultChecked={item.done}
        />
        {item.text}
    </label>
  );
}

export default TodoItem;