import { useState } from 'react';
import './App.css';
import AddTodoWindow from './components/AddTodoWindow/AddTodoWindow';
import Header from './components/Header/Header';
import TodosDesc from './components/TodosDesc/TodosDesc';
import TodosList from './components/TodosList/TodosList';

function App() {
  const [todos,setTodos] = useState([])

  const addTask = (taskName, taskDesc) => {
    if (taskName) {
      const newTask = {
        id: new Date().getTime(),
        name: taskName,
        desc: taskDesc ? taskDesc : "",
        progress: false
      }
      setTodos([...todos, newTask])
      console.log(todos)
    }
  }

  const removeTask = () => {

  }

  const toggleTaskProgress = () => {

  }


  return (
    <div className="App">
      <Header />
      <TodosList todos={todos} removeTask={removeTask} 
      toggleTaskProgress={toggleTaskProgress}/>
      <TodosDesc/>
      <AddTodoWindow addTask={addTask}/>
    </div>
  );
}

export default App;
