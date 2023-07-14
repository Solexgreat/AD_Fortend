import './index.css';
import {useState} from "react"

const ToDO = props => {
    <tr>
        <td>
            <label>{props.id}</label>
        </td>
        <input/>
        <td>
            <label>{props.createdAt}</label>
        </td>
    </tr>
};

function App() {
    const {todos, setTodos} = useState([{
        id: 'todo1',
        createdAt: '18:00'
    },{
        id: 'todo2',
        createdAt: '20:30'

    }])

    const reverseOrder = (e) => {
        e.preventDefault
        setTodos([...todos].reverse());
    }

    return (
        <div>
            <button onClick={reverseOrder}>Reverse</button>
            <table>
                <tbody>
                    {todos.map((todo, index) => (
                    <ToDo id={todo.id} createdAt={todo.createdAt}/>))}
                </tbody>
            </table>
        </div>
        
    );
} 