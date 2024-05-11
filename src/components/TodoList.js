import {ListItem} from "./ListItem.js"
import "./TodoList.css"

export const TodoList = ({todos, removeTodo}) => {
    return (
        <div className="todo-list">
            {/* <ListItem text="Item1"/>
            <ListItem text="Item1" />
            <ListItem text="Item1" /> */}

            {/* curly braces for using javscript below */}

            {todos.map((todo, idx) => {
                return (<ListItem 
                        text={todo} 
                        key={idx} 
                        removeTodo={() => removeTodo(idx)} />
                        );
                })
            }
        </div>
    );
};

// export const TodoList = ({ todos, removeTodo }) => {
//     return (
//       <div className="todo-list">
//         {todos.map(todo => (
//           <div key={todo.id} className="list-item">
//             <span>{todo.text}</span>
//             <button onClick={() => removeTodo(todo.id)}>X</button>
//           </div>
//         ))}
//       </div>
//     );
//   };