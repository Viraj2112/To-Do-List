import ToDoItem from "./To-Do-Item";

function ToDoList(props) {
    const tasks = props.tasks

    return (
    <>
        <ul className="">
            {/* If there are no tasks then we will show list is Empty or else we will show the list of all the tasks. */}
            {tasks.length == 0 ? <p className="mx-auto text-xl mt-20 font-serif text-slate-500">List is Empty!</p> : tasks.map(task => <ToDoItem key={task.id} task={task} deleteTask={props.deleteTask} editTask={props.editTask} complete={props.complete}/> ) }
        </ul>     
    </>
);
}

export default ToDoList;