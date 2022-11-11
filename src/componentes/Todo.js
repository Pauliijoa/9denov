const Todo = (props) => {
    return(
        <div>
            <input type="checkbox"></input>
            <label>{props.children}</label>
            <button onClick={props.onClickFn}>🗑️</button>
            
            
            

          
        </div>
    )
}
export default Todo