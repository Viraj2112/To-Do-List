
function ToDoItem(props) {
    
    return (
        <>  
            {/* div comtainig Item desction and buttons */}
            <div className=" flex ml-16 my-4 gap-2">
                {/* Below is the Item desctiption */}
                <li className="border border-slate-300 rounded-md shadow-lg p-1 w-96 h-28 overflow-auto font-serif">{props.task.isComplete && "✅"} {props.task.description}</li> 
                {/* Below are the 3 buttons */}
                <div className="flex gap-3">
                    <button className="btn" type="button" onClick={() => props.deleteTask(props.task.id)}>Delete</button>
                    <button className="btn" type="button" onClick={() => props.editTask(props.task.id)}>Edit</button>
                    <button className="btn" type="button" onClick={() => props.complete(props.task.id)}>{props.task.isComplete ? "✘": "✅"}</button>
                </div>
            </div>
        </>
    );
}

export default ToDoItem;