import faq from '../API/faq.json'
import {useState, useEffect} from 'react'
import { FAQ } from './UI/FAQ';
export const Accordion = () => {
    const [data, setData] = useState([]);
    const [activeID, setActiveID] = useState(false);
    const handleButtonClick = (id) => {
        setActiveID((prevId) => prevId === id ? false : id)
    };
    useEffect(()=> {
        setData(faq);
    },[]);
    return (
        <>
            <h1>The Accordion</h1>
            <ul className='section-accordion'>
                {
                    data.map((currEle) => {
                        return (
                            //React passes props as one object, not separate params.
                            <FAQ 
                                currEle={currEle} 
                                isActive={currEle.id===activeID}
                                toggle={() => handleButtonClick(currEle.id)}
                            />
                        )
                    })
                }
            </ul>
        </>
    )
}