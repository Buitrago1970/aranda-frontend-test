import { createContext, ReactNode, useState } from "react";
interface AppContextType {
    state: any;
    setRecipes: (payload: any) => void;
    }

export const AppContext = createContext<AppContextType>({
    state: {},
    setRecipes: () => {
    },
    });

const AppProvider = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState<any>({
        recipes: [],
    });
    const setRecipes = (payload: any) => {
        setState(payload);
    };
    return (
        <AppContext.Provider value={{state, setRecipes}}>
        {children}
        </AppContext.Provider>
    );
}

export default AppProvider;