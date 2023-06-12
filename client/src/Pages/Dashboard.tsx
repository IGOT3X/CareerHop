import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserPanel from "../Components/Panels/UserPanel";
import Applications from "../Components/Applications";
import AddApplication from "../Components/Menus/AddApplication";



const Dashboard = () => {

    const navigator = useNavigate();
    const [pageSelected, setPageSelected] = useState("applications");

    const [showAddApplication, setShowAddApplication] = useState(false);


    useEffect(() => {
        if (!Cookies.get("seshID")) return navigator("/login");
    }, []);


    return (
        <>
            <div className="w-screen sm:h-screen py-[73px] px-[49px] flex sm:flex-row flex-col gap-[49px]">
                <UserPanel SetState={setPageSelected} />
                <div className="flex flex-col bg-black-600 h-full w-full rounded-[20px] p-[18px] fade-in">
                    <div className="flex flex-col sm:flex-row items-center pt-5 sm:pt-0 gap-5 sm:gap-0 justify-between">
                        <h1 className="gradient-1 text-[32px]">CareerHop</h1>
                        <div className="flex flex-col sm:flex-row gap-[24px]">
{/*                             {pageSelected == "applications" &&
                                <div className="flex items-center border border-black-500 rounded-[8px] h-[48px] gap-[8px] px-[8px]">
                                    <img src="search.svg" className="w-[24px] h-[24px]" alt="" />
                                    <input className="h-[48px] bg-transparent outline-none text-black-200" placeholder="Search" type="text" name="" id="" />
                                </div>
                            } */}

                            <button onClick={() => setShowAddApplication(true)} className="group self-end relative">
                                <div className={`h-[48px] flex gap-[8px] items-center px-[24px] border-2 border-black-500 text-black-300 rounded-[8px] opacity-100 group-hover:opacity-0 transition ease-out duration-700 absolute`}><img src="plus-circle.svg" alt="" /><p>Add an application</p></div>
                                <div className={`h-[48px] flex gap-[8px] items-center px-[24px] rounded-gradient text-green rounded-[8px] opacity-0 group-hover:opacity-100 transition ease-out duration-700 `}><img src="plus-circle-gradient.svg" alt="" /><p>Add an application</p></div>
                            </button>

                        </div>
                        {showAddApplication &&
                            <AddApplication setShowAddApplication={setShowAddApplication} />
                        }
                    </div>
                    {
                        pageSelected == "applications" &&
                        <div className="overflow-y-auto">
                            <Applications archive={false} />
                        </div>
                    }
                    {
                        pageSelected == "archive" &&
                        <div className="overflow-y-auto">
                            <Applications archive={true} />
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Dashboard