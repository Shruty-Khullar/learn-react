import { createContext, useContext } from "react";

//Step1 -> create Context API -> context obj
export const BioContext = createContext();

//Step2 -> Create Provider Component
export const BioProvider = ({children}) => {
    const myName = "Shruty";
    const surName = "Khullar"
    console.log(children)
    // {{}} -> In this first bracket is to enter js BiWorld, second bracket is telling its an obj for sending multiple props send in form of an obj
    return <BioContext.Provider value={{myName, surName}}>
        {children}
    </BioContext.Provider>
}

export const useBioContext = () => {
    const context = useContext(BioContext);
    //If we haven't wrapped component within bioprovider, it will not be one of the consumer of provider and hence it wont get its value and therefor values will be undefined 
    if (context===undefined)
        throw new Error("Component must be wrapped with BioProvider")
    console.log(context)
    return context;
}
