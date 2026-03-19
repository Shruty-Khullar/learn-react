import { createContext } from "node:vm";

const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
    return 
        <ThemeContext.Provider values={}>
            {children}
        </ThemeContext.Provider>
}