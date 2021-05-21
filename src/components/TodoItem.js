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
          onClick={()=>{changeStatus(item.id)}} 
          defaultChecked={item.done}
        />
        {item.text}
    </label>
  );
}

export default TodoItem;