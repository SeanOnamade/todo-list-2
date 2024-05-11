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
    const todosCopy = [...todos];
    todosCopy.splice(todoIndex, 1);
    setTodos(todosCopy);
  }

  return (
    <div className="App">
        <Form addTodo={addTodo}/>
        <TodoList todos={todos}  removeTodo={removeTodo}/>
    </div>
  )
};
