import React, { createContext, ReactNode } from "react";

export const AppContext = createContext({});

const AppProvider = ({ children }: { children: ReactNode }) => {

    const [state, setState] = React.useState({});
    
    return (
        <AppContext.Provider value={{state}}>
        {children}
        </AppContext.Provider>
    );
}

export default AppProvider;