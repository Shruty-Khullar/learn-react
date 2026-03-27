import { createContext, useContext, useState } from "react"

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState("dark");
    const handleToggleTheme = () => {
        setTheme((prevTheme)=> prevTheme === "dark" ? "light" : "dark")
    };

    return (
        <ThemeContext.Provider value={{theme, handleToggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const DarkLight = () => {
    const {theme, handleToggleTheme} = useContext(ThemeContext)
    return (
        <div style={{
            color: theme === 'dark' ? '#ffffff' : '#000000',
            backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
            minHeight: '100vh'
        }}>
            <h1 style={{color: theme === 'dark' ?'#ffffff': '#000000'}}>Dark Light Mode Website</h1>
            <button onClick={handleToggleTheme}>{theme==="dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}</button>
        </div>
    )
}