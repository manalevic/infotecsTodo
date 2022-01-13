import { useState } from 'react';
import './App.css';
import AddTodoWindow from './components/AddTodoWindow/AddTodoWindow';
import Header from './components/Header/Header';
import TodosEditing from './components/TodosEditing/TodosEditing';
import TodosList from './components/TodosList/TodosList';

function App() {
  const [todos, setTodos] = useState([]);
  const [addTaskCondition, setAddTaskCondition] = useState(false);
  

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

  const editTask = (id, taskName, taskDesc) => {
    setTodos([...todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, name: taskName, desc: taskDesc }
      }
      return todo;
    })])
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const toggleTaskProgress = () => {

  }


  const toggleAddTaskWindow = (condition) => {
    setAddTaskCondition(condition)
    console.log(todos)
    console.log(todos.filter((todo) => todo.isChosen === true))
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
      <Header toggleAddTaskWindow={toggleAddTaskWindow} />
      <TodosList todos={todos} removeTask={removeTask}
        toggleIsChosen={toggleIsChosen} />
      <TodosEditing todos={todos} editTask={editTask} removeTask={removeTask}/>
      {addTaskCondition && <AddTodoWindow toggleAddTaskWindow={toggleAddTaskWindow} addTask={addTask} />}
    </div>
  );
}

export default App;
