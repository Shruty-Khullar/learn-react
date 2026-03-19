import { useState } from "react";
import './Todo.css';
export const TodoForm = ({onAddTodo}) => {
    const [inputValue, setInputValue] = useState({});

    const handleInput = (value) => {
        // we have made value as id because we are only adding unique task in array so id will also be unique
        //input value is now an object
        setInputValue({id: value, content: value, checked: false});
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onAddTodo(inputValue);
        //once user submitted task make it empty again ( input field )
        setInputValue({content: ""});
    }
    return (
        <section className='form'>
            <form onSubmit={handleFormSubmit} className='todo-form'>
                <input type='text' className='todo-input' autoComplete='off' value={inputValue.content} onChange={(event)=> handleInput(event.target.value)}/>
                <button type='submit' >
                    Add a task
                </button>     
            </form>
        </section>
    )
}