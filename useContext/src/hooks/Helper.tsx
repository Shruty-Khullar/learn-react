import { useBioContext } from "."

export const Helper = () => {
    // const {surName} = useContext(BioContext);
    const {surName} = useBioContext();
    return (
        <p>Hi, 'Shruty' {surName}</p>
    )
}