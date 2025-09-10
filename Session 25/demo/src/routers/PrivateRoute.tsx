import type { ReactNode } from "react"
import { Navigate } from "react-router-dom"

function PrivateRoute({ children }: { children: ReactNode }) {
    return (
        false ? children : <Navigate to={"/home"}></Navigate>
    )
}

export default PrivateRoute