import { useState } from 'react';
import './Todo.css';
import { MdCheck, MdDelete } from "react-icons/md";

export const Todo = () => {
    const [inputValue, setInputValue] = useState("");
    const [dateTime, setDateTime] = useState("")
    const handleInput = (event) => {
         setInputValue(event.target.value);
    }
    const [task, setTask] = useState([]);
    const handleFormSubmit = (event) => {
        //default behvIOR OF redirection prohibited
        event.preventDefault();
        if(!inputValue) 
            return;

        if(task.includes(inputValue)) {
            setInputValue("");
            return;
        }
        //👉 The function form receives previous state as its parameter from useState
        setTask((prev)=>[...prev, inputValue]);
        //once user submitted task make it empty again ( input field )
        setInputValue("");

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
            <section className='form'>
                <form onSubmit={handleFormSubmit} className='todo-form'>
                    <input type='text' className='todo-input' autoComplete='off' value={inputValue} onChange={handleInput}/>
                    <button type='submit' >
                        Add a task
                    </button>     
                </form>
                <ul className='todo-list'>
                    {
                        task.map((currTask,index) => {
                            return (
                                <li key={index} className='todo-item'>
                                    <span>{currTask}</span>
                                    <button className='check-btn'><MdCheck/></button>
                                    <button className='delete-btn' onClick={() => handleDelete(currTask)}><MdDelete /></button>
                                </li>
                            )
                            
                        })
                    }
                </ul>
                <button onClick={handleClear}>Clear All</button>
            </section>
        </section>
    )
}

// if only value={state} is given in input, error:
// react-dom_client.js?v=fa07f06b:14862 A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components
// It feels expected, but React prevents switching between uncontrolled and controlled inputs to avoid bugs and unpredictable behavior.
// Switching control can cause cursor jumps, lost text, focus issues, and unpredictable input behavior.