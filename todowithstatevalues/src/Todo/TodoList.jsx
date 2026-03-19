import { useState } from "react";
import { MdCheck, MdDelete } from "react-icons/md";

export const TodoList = ({task, onDeleteTodo, onClearTodo}) => {
    const handleDelete = (currTask) => {
        onDeleteTodo(currTask)
    }
    const handleClear = () => {
        onClearTodo();
    }
    return (
        <section>
            <ul className='todo-list'>
                {
                    
                    task.map((currTask) => {
                        return (
                            <li key={currTask.id} className='todo-item'>
                                {console.log(currTask)}
                                <span>{currTask.content}</span>
                                <button className='check-btn'><MdCheck/></button>
                                <button className='delete-btn' onClick={() => handleDelete(currTask)}><MdDelete /></button>
                            </li>
                        )
                        
                    })
                }
            </ul>
            <button onClick={handleClear}>Clear All</button>
        </section>
    )
}