export const Practise = () => {
    const students = ["anc"];
    return(
        <>
            {/* here undefined is a string so it will come in output */}
            <p>undefined</p>
            {/* React ignores: */}
            {/* {} means: evaluate JavaScript expression ;value = undefined; React receives undefined; React renders nothing */}
            <p>{undefined}</p>
            <p>{null}</p>
            <p>{false}</p>

            {/* Output 0 0 */}
            {/* 0 && anything -> 0 */}
            {/* truthy && value → returns value */}
            <p>{students.length && "No Students Found"}</p> 
            <p>Empty String: {""}</p>
            <p>Number of students: {students.length}</p>

            {/* if length !=0 then 1st condition is false and the exp will return false and react won't render false */}
            <p>{students.length===0 && "No Students Found"}</p> 
        </>
    )

}