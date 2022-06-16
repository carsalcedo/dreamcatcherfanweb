import { createContext, useContext, useReducer } from "react";

export const themeContext = createContext();

const initialState = {darckMode : false};

const themeReducer = (action, state) => {
    switch(action.type){
        case 'toggle':
            return {darckMode : !state.darckMode};
        default:
            return state
    }
};

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer (themeReducer, initialState);
    return (
        <themeContext.Provider value={{state, dispatch}}>
            {props.children}
        </themeContext.Provider>
    )
}