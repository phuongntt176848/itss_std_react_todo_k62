/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
function Filter(  props ) {
  return (
    <div className="panel-tabs" stype = {{display: 'flex'}}>
     <a 
        type="button" 
        className="button"
        onClick={()=>{props.onFilterTodo(0)}}
      >全て</a>
      <button 
        type="button" 
        className="button"
        onClick={()=>{props.onFilterTodo(-1)}}  
      >未完了</button>
      <button 
        type="button" 
        className="button"
        onClick={()=>{props.onFilterTodo(1)}}
      >完了済み</button>
    </div>
  );
}

export default Filter