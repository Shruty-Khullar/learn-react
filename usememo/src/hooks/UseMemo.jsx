import {useState, memo} from 'react';
// const ExpensiveCalculations = memo(() => {
//     const sum = () => {
//         console.log("Calculating sum...");
//         let i = 0;
//         for (i = 0; i <= 1000000000; i++) {
//             i = i + 1;
//         }
//         return i;
//     };

//     const total = sum();

//     //   const total = sum();

//     return <p> sum: {total} </p>;
    
// })
const ExpensiveCalculations = () => {
    const sum = () => {
        console.log("Calculating sum...");
        let i = 0;
        for (i = 0; i <= 1000000000; i++) {
            i = i + 1;
        }
        return i;
    };

    //fn format
    // useMemo(()=> {
    //     return 
    // },[])
    //[] -> run only once
    const total = useMemo(()=> sum(), [])
    //   const total = sum();

    return <p> sum: {total} </p>;
    
}
 export const MemoParentComponent = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <ExpensiveCalculations />
            <button onClick={()=> setCount(count+1)}>
                Re-Render parent
            </button>
            <br/>
            <p>Parent re-rendered : {count}</p>
        </div>
    )
}