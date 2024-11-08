
function ToDo(){

    return(
        <div>
            <h1>ToDoList</h1>
            {/* title */}
            <input type="text" placeholder="Add new task"></input>
            {/* input to add */}
            <button>Add</button>
            {/* make task into an list element under ul */}
            <br></br>
            <ul>
            {/* contains the tasks */}
                <input type="checkbox"></input>
                {/* checkbox to cross items */}
                <li>task1</li>
                <button>x</button>
                {/* deletes the task */}

                <input type="checkbox"></input>
                <li>task1</li>
                <button>x</button>

                <input type="checkbox"></input>
                <li>task1</li>
                <button>x</button>
            </ul>
        </div>
    )

}

export default ToDo