import ProfileCard from "../components/ProfileCard"
export default function Profile() {
  return (
    <div>
      <h1>Profile Card Challenge</h1>
      <ProfileCard
        name="Alice"
        age={30}
        greetings={
          //JSX as a prop
          <div>
            <strong>Hi Alice, Have a  wonderful day!</strong>
          </div>
        }
      >
        <p>Hobbies: Reading, Hiking</p>
        <button>Contact</button>
      </ProfileCard>
      <ProfileCard
        name="Bob"
        //In JSX we have to pass number 
        age={20}
        greetings={
          //JSX as a prop
          <div>
            <strong>Hi Bob, Have a  wonderful day!</strong>
          </div>
        }
      >
        <p>Hobbies: Reading, Hiking</p>
        <button>Contact</button>
      </ProfileCard>
    </div>
  )
}