// import { createContext, useReducer, useEffect } from "react";

// export const ThemeContext = createContext();

// const INITIAL_STATE = { darkMode: JSON.parse(localStorage.getItem("theme")) || "dark" };

// const themeReducer = (state, action) => {
//     switch(action.type){
//         case "TOGGLE":
//             return { darkMode: "dark" ? "dark" : "light" };
//             default:
//                 return state;
//     }
// };

// export const ThemeProvider = (props) => {
//     const [ state, dispatch ] = useReducer(themeReducer, INITIAL_STATE);

//     useEffect(() => {
//         localStorage.setItem("theme", JSON.stringify(state.darkMode))
//     }, [state.darkMode]);

//     return(
//         <ThemeContext.Provider value={{state, dispatch}}>
//             {props.children}
//         </ThemeContext.Provider>
//     )
// }



import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
    if(typeof window !== "undefined"){
        const value = localStorage.getItem("theme");
        return value || "light";
    }
};

export const ThemeProvider = ({ children }) => {


    const [theme, setTheme] = useState(()=>{
        return getFromLocalStorage();
    });

    const toggle = () => {
        setTheme(theme === 'light' ? 'dark':'light');
    };

    useEffect(()=>{
        localStorage.setItem("theme", theme);
    },[theme]);
    
    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
}
