import { useState } from "react";
import './Todo.css';
export const TodoForm = ({onAddTodo}) => {
    const [inputValue, setInputValue] = useState("");

    const handleInput = (event) => {
        setInputValue(event.target.value);
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onAddTodo(inputValue);
        //once user submitted task make it empty again ( input field )
        setInputValue("");
    }
    return (
        <section className='form'>
            <form onSubmit={handleFormSubmit} className='todo-form'>
                <input type='text' className='todo-input' autoComplete='off' value={inputValue} onChange={handleInput}/>
                <button type='submit' >
                    Add a task
                </button>     
            </form>
        </section>
    )
}