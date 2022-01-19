import { useState } from 'react';
import './App.css';
import AddTodoWindow from './components/AddTodoWindow/AddTodoWindow';
import Header from './components/Header/Header';
import TodosEditing from './components/TodosEditing/TodosEditing';
import TodosList from './components/TodosList/TodosList';

function App() {
  makeElementResizable()

  const [todos, setTodos] = useState([]);   //основной state, тут хранятся все todo
  const [addTaskCondition, setAddTaskCondition] = useState(false); // состояние окна добавления задачи, если true - то пользователь видет окно, если false - нет.

  function makeElementResizable() {   // функция, которая заставляет наш resizer работать
    document.addEventListener("DOMContentLoaded", () => {   // ждем пока html прогрузится, что можно было использовать его элементы
      const element = document.querySelector('.App');
      const resizer = document.querySelector('#resizer')
      resizer && resizer.addEventListener('mousedown', function (e) {
        e.preventDefault()
        window.addEventListener('mousemove', resize)  // вешаю событие не на resizer, а на window, чтобы элемент не переставал 
        window.addEventListener('mouseup', stopResize) // измерять размер, когда курсор уходит с resizer
      })

      function resize(e) {
        if (e.pageX - element.offsetLeft > element.clientWidth * 0.4) {       // максимальный ограничитель
          element.style.gridTemplateColumns = `${element.clientWidth * 0.4 + 'px'} 10px auto`
        } else if (e.pageX - element.offsetLeft < element.clientWidth * 0.08) {       // минимальный ограничитель
          element.style.gridTemplateColumns = `${element.clientWidth * 0.08 + 'px'} 10px auto`
        } else {
          element.style.gridTemplateColumns = `${e.pageX - element.offsetLeft + 'px'} 10px auto`  // пользовательский размер 
        }
      }

      function stopResize() {
        window.removeEventListener('mousemove', resize) // собственно перестаем "ресайзить", когда отжимаем кнопку мыши
      }
    })
  }

  const addTask = (taskName, taskDesc) => { //добавление новой заметки
    if (taskName) {  // если не указать наименование заметки, она не добавится
      const newTask = {
        id: new Date().getTime(),
        name: taskName,
        desc: taskDesc ? taskDesc : ``, // описание может быть пустым
        progress: 1,   // 1 - ожидает, 2 - в процессе, 3 - выполнена
        isChosen: false  // состояние заметки. если true, то она выбрана и отображается в окне редактирования
      }
      setTodos([...todos, newTask])
    }
  }

  const editTask = (id, taskName, taskDesc) => {  // редактирование заметки
    setTodos([...todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, name: taskName, desc: taskDesc }
      }
      return todo;
    })])
  }

  const removeTask = (id) => {  // удаление заметки
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const toggleTaskProgress = (id, progressValue) => {   // изменения прогресса заметки
    setTodos([...todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, progress: +progressValue }
      }
      return todo;
    })])
  }

  const toggleAddTaskWindow = (condition) => {  // переключение состояния окна добавления задачи
    setAddTaskCondition(condition)
  }

  const toggleIsChosen = (id) => {  // выбрана заметка или нет
    setTodos([...todos.map((todo) => {
      if (todo.isChosen === true) {
        return { ...todo, isChosen: false }  // забываем старую
      } else if (todo.id === id) {
        return { ...todo, isChosen: true } // запоминаем новую
      }
      return todo;
    })])
  }

  return (
    <div className="App">
      <Header toggleAddTaskWindow={toggleAddTaskWindow} />
      <TodosList todos={todos} removeTask={removeTask}
        toggleIsChosen={toggleIsChosen} />
      <div id="resizer"></div> 
      <TodosEditing todos={todos} editTask={editTask} removeTask={removeTask} toggleTaskProgress={toggleTaskProgress} />
      {addTaskCondition && <AddTodoWindow toggleAddTaskWindow={toggleAddTaskWindow} addTask={addTask} />}
    </div>
  );
}

export default App;
