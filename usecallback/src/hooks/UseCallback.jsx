import {useState, memo, useCallback} from 'react';
const Button = memo(({onClick, children}) => {
    console.log(`Rendering button: ${children}`);
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: children === 'Increment' ? 'green' : 'red',
                color: children === 'Increment' ? 'white' : 'black',
                fontSize: '20px',
                padding: '12px 24px',
                minWidth: '140px',
                minHeight: '50px'
            }}
        >
            {children}
        </button>
    )
});
const UseCallback = () => {
    const [count, setCount] = useState(0);
    const increment = useCallback(()=>{
        console.log('We are Incrementing')
        setCount(prevCount => prevCount+1);
    }, []);
    const decrement = useCallback(() => {
        console.log('We are decrementing')
        setCount(prevCount => prevCount-1);
    }, []);
    return (
        <div>
            <h1>Count: {count}</h1>
            <div style={{paddingTop: '0.5em'}}>
                <Button onClick={increment}>Increment</Button>
            </div>
            <div style={{paddingTop: '0.5em'}}>
                <Button onClick={decrement}>Decrement</Button>
            </div>
        </div>

    )
}
export default UseCallback;
