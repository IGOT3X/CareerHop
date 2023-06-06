import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigator = useNavigate();

    useEffect(() => {
        if (Cookies.get("seshID")) return navigator("/");

    }, []);
    return (
        <>
            <p>Login</p>
        </>
    )
}

export default Login;