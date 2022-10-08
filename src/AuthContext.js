import { createContext } from "react";

const defaultAuthValue = {
    isAuthenticated: false,
    setAuthenticated: () => { }
}
export const AuthContext = createContext(defaultAuthValue);
