import { useState } from "react";

const users = [
    { name: "shruty", age: 25 },
    { name: "Swetangi", age: 26 },
    { name: "Himanshi", age: 27 }
];

export const M1 = () => {
    const userMapping = (ele) => (
        <li>
            {ele.name}: {ele.age}
        </li>
    )
    return (
        <>
            <h1>UserList</h1>
            <ul>
                {users.map((user)=>userMapping(user))}
            </ul>
        </>
    )
}

export const M2 = () => {
    return (
        <>
            <h1>UserList</h1>
            <ul>
                {
                    users.map((ele)=>(
                            <li>
                                {ele.name} - {ele.age} years old
                            </li>
                    ))
                }
            </ul>
        </>
    )
}

export const M3 = () => {
    return (
        <>
            <h1>UserList</h1>
            <ul>
                {
                    users.map((ele)=> {
                        return (
                             <li>
                                {ele.name} - {ele.age} years old
                            </li>
                        )
                    }
                    )
                }
            </ul>
        </>
    )
}

export const M4 = () => {
    const [users, setUSers] = useState([
        { name: "shruty", age: 25 },
        { name: "Swetangi", age: 26 },
        { name: "Himanshi", age: 27 }
    ]);
    return (
        <>
            <ul>
                {
                    // ✔ map() method is predefined in JavaScript.
                    // ✔ The arguments it passes are predefined.
                    // ❌ the callback function is written by you.
                    users.map((currElem, index)=>{
                        return (
                            <li key={index}>
                                {currElem.name}: {currElem.age};
                            </li>
                        )

                    })
                }
            </ul>
        </>
    )

}


//When using map, if the callback function is an arrow function with curly braces {}, you need to use return to return the transformed value. If you don't use return, the callback function will return undefined by default, and the resulting array will contain undefined values.