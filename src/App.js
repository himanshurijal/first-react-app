import Header from './components/Header.js'
import Tasks from './components/Tasks.js'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {
  // Here we're making our tasks state an app-level state.App
  // This is so that all other components can make use of this
  // global state.
  // 'tasks' is the app-level state and 'setTasks' is the method
  // to update the state. 
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Take out the trash',
        day:'Feb 5th at 2:30 pm',
        reminder:true
    },
    {
        id: 2,
        text: 'Draw the art',
        day:'Feb 6th at 2:30 pm',
        reminder:true
    },
    {
        id: 3,
        text: 'Read the book',
        day:'Feb 7th at 2:30 pm',
        reminder:false
    }
  ])
  const [showAddTask, setShowAddTask] = useState(false);

// DELETE a task
// Here we're getting the id of the Task component
// on which the 'X' was clicked, and then filtering
// out that task from our app-level state. Remember
// that states are immutable, so we cannot do a 
// tasks.pop(id) to remove the task from our app-level
// state.
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
}

// ADD a task
// Here we're generating a new random id for the task.
// Then we're creating a new object with the id and 
// the task combined. Finally, we 'add' this task 
// to our task state (although it is immutable)? Please
// check how state (tasks) is being manipulated here.   
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1;
  const newTask = {id, ...task};
  console.log(newTask);
  setTasks([ ...tasks, newTask ]);
  console.log(tasks);
}

// TOGGLE reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? 
  {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
        <Header title = "Task Tracker" 
        onAdd = {() => setShowAddTask(!showAddTask)}
        showAddTask = {showAddTask} />
        {!showAddTask && <AddTask onAdd = {addTask} /> }
        {tasks.length > 0 ?
        (<Tasks tasks = {tasks} 
        onDelete = {deleteTask} onToggle = {toggleReminder}/>)
        : 
        ('No tasks to show!')}
    </div>
  );
}

export default App;
