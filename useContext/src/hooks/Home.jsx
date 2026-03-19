import { useBioContext } from "."

export const Home = () => {
    // const {myName} = useContext(BioContext);
    const {myName} = useBioContext();
    return (
        <h>Hi, {myName}</h>
    )
}