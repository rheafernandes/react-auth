import { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { AuthContext } from "./AuthContext";
import AuthPage from "./pages/AuthPage"
import HomePage from "./pages/Home";
import LandingPage from "./pages/LandingPage";

const AppRouter = () => {
    const { isAuthenticated } = useContext(AuthContext);
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<LandingPage />} />
                <Route path="home" element={isAuthenticated ? <HomePage /> : <Navigate replace to="/auth" />} />
                <Route path="auth" element={<AuthPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;