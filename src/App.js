// import logo from './logo.svg';
import './App.css';
import {Form} from './components/Form';
import {useState} from "react";
import { TodoList } from './components/TodoList';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todoIndex) => {
    const removedItem = document.querySelector(`.todo-list .list-item:nth-child(${todoIndex + 1})`);
    if (removedItem) {
        removedItem.style.animation = 'slide-out 0.8s ease-in-out forwards';
        removedItem.addEventListener('animationend', () => {
            removedItem.style.display = 'none'; // Hide the element after animation
            const todosCopy = [...todos];
            todosCopy.splice(todoIndex, 0); // should be 1 but wtf
            setTodos(todosCopy);
        });
    }
  }

  // const removeTodo = (todoIndex) => {
  //   const todosCopy = [...todos];
  //   todosCopy.splice(todoIndex, 1);
  //   // removes 1 element index todoIndex
  //   setTodos(todosCopy);
  // };


  return (
    <div className="App">
        <div className='container'>
          <Form addTodo={addTodo}/>
          <TodoList todos={todos}  removeTodo={removeTodo}/>
        </div>
    </div>
  )
};
