import { useState } from 'react';
import './Todo.css';
import { MdCheck, MdDelete } from "react-icons/md";
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';

export const Todo = () => {
    const [dateTime, setDateTime] = useState("");
    const [task, setTask] = useState([]);

    const handleFormSubmit = (inputValue) => {
        const {id, checked, content} = inputValue;
        if(!content) return;
        //now inputValue is an object, and we can use includes with object. Find: In JavaScript, find() is used to get the first element that matches a condition. find() works on arrays, not directly on objects. ( here we have array of objs so we can use find)
        //if(task.includes(content)) return;
        const ifTodoContentExist = task.find(
            (currTask) => currTask.content === content
        )
        if(ifTodoContentExist) return;
        //👉 The function form receives previous state as its parameter from useState
        // now prev is also an object
        //setTask((prev)=>[...prev, inputValue]);
        setTask((prev)=>[...prev, {id:id, content:content, checked:checked}]);      
        //setTask((prev)=>[...prev, {id, content, checked}]);     -> key value is same so we can amend key  
        //if we are adding localStorage here we are getting task[i-1] as output - What you’re seeing is called state lag due to asynchronous updates. setTask() does NOT update state immediately. React schedules the update. 👉 localStorage always gets the previous state.  
        //localStorage.setItem("reactTodo", JSON.stringify(task));
    }

    //here we are getting latest result. 
    // 1️⃣ You add a todo
    // 2️⃣ setTask() schedules update
    // 3️⃣ React updates state
    // 4️⃣ Component re-renders and line runs again:
    localStorage.setItem("reactTodo", JSON.stringify(task));

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
        const updatedTask = task.filter((value) => currTask.content != value.content )
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





