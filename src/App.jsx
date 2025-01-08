import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import ToDoList from './Components/To-Do-List'


function App() {

  const [input, setInput] = useState(""); // To manage the input value
  const [tasks, setTasks] = useState([]); // To manage the list of tasks
  const [Id, setId] = useState(0); // To manage the Id.

  function addTask() {
    if(input != "") {
      let lastId = Id // retriving teh last Id from the state.
      let newId = lastId+1; //adding +1 to make each Id unique.

      // Creating a newTask object with id, description, isComplete as keys.
      const newTask = {id: newId, description: input, isComplete: false};
      // Updating the Tasks to add the newTask.
      setTasks((prevTasks) => [...prevTasks, newTask]);
      // Updating the Id.
      setId(newId);

      // Clear the input field after adding the input
      setInput("");
    } else {
      // If the User clicks add button when the input field is empty then the message will pop.
      alert("Please Enter a Task!")
    }
  }

  function deleteTask(id) {
    // Filter out all the tasks which does not match the id.
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks); // Update the tasks state
  }

  function editTask(id) {
    // Getting hold of the task to update and integrating its description into input field only if the input field is empty
    if(input == "") {
        const taskToUpdate = tasks.filter(task => task.id==id)[0];
        setInput(taskToUpdate.description);
        deleteTask(id);
    } else {
      // If the input field is not complete.
        alert("Please Save the current Task.");
    }
  }

  function markCompleted(id) {
    // Getting hold of all the prevTasks and making changes to it using the .map function
    setTasks((prevTasks) => prevTasks.map(task => task.id == id ?{...task, isComplete: !task.isComplete} : task))

  }

  return (
    <>
      <div className='flex flex-col items-center '>
        <Header/>
        <div className='flex gap-5'>
          <input value={input} type="text" className="input font-serif border rounded-md shadow-md p-1 border-slate-500 w-96 focus:outline-none focus:border-blue-500 focus:border-2" onChange={(e) => setInput(e.target.value)}/>
          <button className="font-medium border border-slate-500 shadow-md rounded-md px-2 transition ease-in-out  bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" type="button" onClick={addTask}>Add</button>
        </div>
        <ToDoList tasks = {tasks} deleteTask={deleteTask} editTask={editTask} complete={markCompleted}/>
      </div>
    </>
  )
}

export default App