// import "./Form.css"
import "./ListItem.css"

export const ListItem = ({text, removeTodo}) => {
    return (
        <div className="list-item">
            <p>{text}</p>
            <button className="checkbox" onClick={removeTodo}></button>
        </div>
    );
};