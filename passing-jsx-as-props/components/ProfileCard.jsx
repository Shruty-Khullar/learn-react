export default function ProfileCard(props) {
    console.log(props.children)
    return (
        <>
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
            <p>{props.greetings}</p>
            {/* anything inside tag was children of that tag */}
            <p>{props.children}</p>
        </>
    )

}
//JSX only allows expressions, not statements.