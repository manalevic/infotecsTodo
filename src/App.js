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
        progress: false,
        isChosen: false
      }
      setTodos([...todos, newTask])
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const toggleTaskProgress = () => {

  }

  const toggleIsChosen = (id) => {
    setTodos([...todos.map((todo) => {
      if (todo.isChosen === true) {
        return { ...todo, isChosen: false }
      } else if (todo.id === id) {
        return { ...todo, isChosen: true }
      }
      return todo;
    })])
  }

  return (
    <div className="App">
      <Header />
      <TodosList todos={todos} removeTask={removeTask} 
     toggleIsChosen={toggleIsChosen}/>
      <TodosDesc todos={todos} />
      <AddTodoWindow addTask={addTask}/>
    </div>
  );
}

export default App;
