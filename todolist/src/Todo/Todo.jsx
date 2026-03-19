import { useState } from 'react';
import './Todo.css';
import { MdCheck, MdDelete } from "react-icons/md";
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';

export const Todo = () => {
    const [dateTime, setDateTime] = useState("");
    const [task, setTask] = useState([]);

    const handleFormSubmit = (inputValue) => {
        if(!inputValue) return;
        if(task.includes(inputValue)) return;
        //👉 The function form receives previous state as its parameter from useState
        setTask((prev)=>[...prev, inputValue]);
    }

    // const now = new Date();
    // const formattedDate = now.toLocaleDateString();
    // const formattedTime = now.toLocaleTimeString();
    // setInterval(()=>{
    //     const now = new Date();
    //     const formattedDate = now.toLocaleDateString();
    //     const formattedTime = now.toLocaleTimeString();
    // }, 1000)
    const getDateTime = () => {
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString();
        setDateTime(`${formattedDate}: ${formattedTime}`);
    }
    //setInterval caise memory leaks. sol -> useEffect
    setInterval(()=> {
        getDateTime();
    }, 1000);

    const handleDelete = (currTask) => {
        const updatedTask = task.filter((value) => currTask != value )
        setTask(updatedTask)
    }
    const handleClear = () => {
        setTask([])
        return;
    }
    return (
        <section className='todo-container'>
            <header>
                <h1>Todo List</h1>
                <h2 className='date-time'>{dateTime}</h2>
            </header>
            <TodoForm onAddTodo={handleFormSubmit}/>
            <TodoList task={task} onDeleteTodo={handleDelete} onClearTodo={handleClear}/>
        </section>
    )
}

// if only value={state} is given in input, error:
// react-dom_client.js?v=fa07f06b:14862 A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components
// It feels expected, but React prevents switching between uncontrolled and controlled inputs to avoid bugs and unpredictable behavior.
// Switching control can cause cursor jumps, lost text, focus issues, and unpredictable input behavior.