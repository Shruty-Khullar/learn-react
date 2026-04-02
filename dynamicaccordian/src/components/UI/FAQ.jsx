import { useState } from 'react';
import '../../App.css'
export const FAQ = ({currEle, isActive, toggle}) => {
    return (
        <li key={currEle.id}>
            <div className='accordion-grid'>
                <p>{currEle.question}</p>
                <button onClick={toggle} className={isActive ? "active-btn" : ""}>{isActive ? 'CLOSE' : 'SHOW'}</button>
            </div>
            <p>{isActive && currEle.answer}</p>
        </li>
    )
}