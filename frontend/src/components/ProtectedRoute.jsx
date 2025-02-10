import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
import Header from "./Header";

const ProtectedRoute = () => {
    const { user } = useSelector((state) => state);

    if (!user) {
        return <Navigate to={'/'} />
    }

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default ProtectedRoute;