// array.reduce((accumulator, currentValue) => {
//   return updatedValue;
// }, initialValue);
// Derived state is a value that is calculated from existing state or props.
// Instead of storing it separately, you derive (compute) it from other data.


const users = [
    { name: "shruty", age: 25 },
    { name: "Swetangi", age: 26 },
    { name: "Himanshi", age: 27 }
];

export const M6 = () => {
    // here usersCount and avgAge are dervied states
    const usersCount = users.length;
    const avgAge = (users.reduce((accumulator, curr) => curr.age+accumulator, 0)) / usersCount;
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
            <h3>Users Number: {usersCount}</h3>
            <p>Average Age: {avgAge}</p>
        </>
    )
}