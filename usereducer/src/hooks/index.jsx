import {useReducer} from 'react'
export const ReducerComp = () => {
    const initialState = {
        count: 0,
        inc: 2,
        dec: 2
    };
    //The reducer function in useReducer always receives two parameters: state and action and returns new state
    const reducer = (state, action) => {
        console.log(state, action)
         // if (action.type === "INCREMENT") {
        //   return state + 1;
        // }
        // if (action.type === "DECREMENT") {
        //   return state - 1;
        // }
        // if (action.type === "RESET") {
        //   return (state = 0);
        // }

        switch (action.type) {
            case 'INCREMENT':
                return {
                    ...state,
                    count: state.count+1
                }

            case "DECREMENT":
                return { ...state, count: state.count - 1 };

            case "RESET":
                return { ...state, count: 0 };

            default:
                return state;
            }

    }
    //state → current state, dispatch → function to send actions to reducer fn, reducer → function that updates state, initialState → starting value
    const [state, dispatcher] = useReducer(reducer, initialState);
    return (
        <div>
            <p>{state.count}</p>
            <button onClick={()=>dispatcher({type: 'INCREMENT'})}>Increment</button>
            <br/>
            <button onClick={()=>dispatcher({type: 'DECREMENT'})}>Decrement</button>
            <br/>
            <button onClick={()=> dispatcher({type: "RESET"})}>RESET</button>
        </div>
    )
}