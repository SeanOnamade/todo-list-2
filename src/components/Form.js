import "./Form.css"
import {useState} from "react";


export const Form = ({addTodo}) => {

    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText("");
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
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