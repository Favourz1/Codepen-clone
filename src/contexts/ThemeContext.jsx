import React, { useState, createContext } from 'react'

export const themeContext = createContext();
export const setThemeContext = createContext();


const ThemeContext = ({ children }) => {

    const [darkMode, setDarkMode] = useState(true);

    return (
        <themeContext.Provider value={darkMode}>
            <setThemeContext.Provider value={setDarkMode}>
                {children}
            </setThemeContext.Provider>
        </themeContext.Provider>
    )
}

export default ThemeContext
