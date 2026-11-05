import { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {

    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('theme') !== 'light'
    )

    useEffect(() => {
        localStorage.setItem('theme', darkMode ? 'dark' : 'light')
    }, [darkMode])

    const toggleTheme = () => {
        setDarkMode(!darkMode)
    }

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
