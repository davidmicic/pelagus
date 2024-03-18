import { Navigate } from "react-router-dom";

type PropsPrivateRouteWrapper = {
    children: JSX.Element
}

const PrivateRouteWrapper = (props: PropsPrivateRouteWrapper) => {
    return (
        isUserLoggedIn() ? props.children : <Navigate to={"/login"}/>
    )
}

export default PrivateRouteWrapper

function isUserLoggedIn(): boolean {
    const jwt = localStorage.getItem("jwt")

    if (jwt) {
        return true
    }

    return false
}