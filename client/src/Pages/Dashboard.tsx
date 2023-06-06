import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



const Dashboard = () => {

    const navigator = useNavigate();

    useEffect(() => {
        if (!Cookies.get("seshID")) return navigator("/login");

    }, []);


    return (
        <>
            <p>Dashboard</p>
        </>
    )
}

export default Dashboard