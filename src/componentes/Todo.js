const Todo = (props) => {
    return(
        <div>
            <input type="checkbox"></input>
            <label>{props.children}</label>
        </div>
    )
}
export default Todo