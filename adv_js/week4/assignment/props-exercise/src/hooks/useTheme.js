import React, {useState} from 'react';


const useTheme = () => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = ()=> {
        
        setTheme((curTheme) => curTheme == "light" ? "dark" : "light")
    }
    return [theme, toggleTheme]
}

export default useTheme;