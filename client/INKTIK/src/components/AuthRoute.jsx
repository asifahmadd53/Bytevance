import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const AuthRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null); 

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get('/auth/protected-route', { withCredentials: true });
                
                setIsAuthenticated(response.data.user ? true : false);
            } catch (error) {
                console.error('Auth check error:', error); // Log error
                setIsAuthenticated(false);
            }
        };
    
        checkAuth();
    }, []);
    
    if (isAuthenticated === null) {
        return <div>Loading...</div>; 
    }

    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default AuthRoute;
