import { createContext , useContext } from "react";

//1st part just creating context and all variable and function it store -> context is just a store
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});

//creating provider 
export const ThemeProvider = ThemeContext.Provider;

//this is so that we need not import usecontext and themecontext, just importing usetheme we import both
export default function useTheme(){
    return useContext(ThemeContext);
}