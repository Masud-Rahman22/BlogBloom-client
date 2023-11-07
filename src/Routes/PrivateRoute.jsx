import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Button, Spinner } from "flowbite-react";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <div className="flex items-center justify-center">
            <Button color="gray">
                <Spinner aria-label="Alternate spinner button example" size="sm" />
                <span className="pl-3">Loading...</span>
            </Button>
        </div>
    }
    if (!user) {
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }
    return children
};

export default PrivateRoute;