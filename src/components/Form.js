import "./Form.css"
import {useState} from "react";
import logo from '../logo.svg';


export const Form = ({addTodo}) => {

    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) {
            // alert("Please enter an item!");
            setText("");
            return;
        }
        addTodo(text);
        setText("");
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <img src={logo} className="App-logo" alt="logo" />
            <input 
            type="text" 
            className="textField"
            value={text}
            onChange={(e) => setText(e.target.value)} />
            <input 
            type="submit" 
            className="submit-btn" 
            value="Add" />
        </form>
    );
};