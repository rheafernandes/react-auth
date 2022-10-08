import { useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import AppRouter from "./routes"
import { useNavigate } from 'react-router-dom';
import AuthPage from "./pages/AuthPage";
const App = () => {
    const [isAuthenticated, setAuthenticated] = useState(false)

    const authContext = {
        isAuthenticated,
        setAuthenticated
    }
    // if (!isAuthenticated) {
    //     return (
    //         <AuthPage />
    //     )
    // }

    return (
        <AuthContext.Provider value={authContext}>
            <AppRouter />
        </AuthContext.Provider>
    );
}

export default App