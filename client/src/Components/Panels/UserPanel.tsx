import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const UserPanel = ({SetState} : {SetState:Function}) => {

    const [pageSelected, setPageSelected] = useState("applications");
    
    const LogOut = ()=>{
        Cookies.remove("seshID");
        location.reload();
    }

    useEffect(()=>{
        SetState(pageSelected);
    },[pageSelected])

    return (
        <>
            <div className="flex flex-col bg-black-600 h-full min-w-[294px] rounded-[20px] py-[22px] items-center slide-in">
                <div className="relative">
                    <div className="relative">
                        <img className="w-[48px] h-[48px]" src="avatar.png" alt="" />
                        <img src="online.svg" alt="" className="absolute top-[-10px] right-[-10px]" />
                    </div>
                    <button className="transition ease-in-out duration-500 hover:scale-105 absolute top-0 right-[-32px]"><img className="w-[24px] h-[24px]" src="upgrade.svg" alt="" /></button>
                </div>
                <p className="text-[14px] gradient-1 pt-[6px]">@{Cookies.get("email")?.split("@")[0]}</p>
                <div className="flex flex-col gap-[25px] mt-[58px] h-full">
                    <button onClick={()=>setPageSelected("applications")} className="group flex items-center justify-center relative">
                        {pageSelected != "applications" &&
                            <div className="h-[48px] w-[204px] flex items-center gap-[8px] px-[24px] py-[8px] border-2 border-black-500 text-black-300 rounded-[8px] opacity-100 group-hover:opacity-0 transition ease-out duration-700 absolute">

                                <img src="folder.svg" alt="" />
                                <p className="">Jobs applied to</p>
                            </div>
                        }
                        <div className={`h-[48px] w-[204px] flex items-center gap-[8px] px-[24px] py-[8px] text-black-300 rounded-[8px] ${pageSelected == "applications" ? "opacity-100 rounded-gradient-2" : "opacity-0 rounded-gradient"} opacity-0 group-hover:opacity-100 transition ease-out duration-700`}>
                            <img src="folder.svg" alt="" />
                            <p className="">Jobs applied to</p>
                        </div>
                    </button>
{/*                     <button onClick={()=>setPageSelected("interviews")} className="group flex items-center justify-center relative">
                        {pageSelected != "interviews" &&
                            <div className="h-[48px] w-[204px] flex items-center gap-[8px] px-[24px] py-[8px] border-2 border-black-500 text-black-300 rounded-[8px] opacity-100 group-hover:opacity-0 transition ease-out duration-700 absolute">

                                <img src="microphone.svg" alt="" />
                                <p className="">Interviews</p>
                            </div>
                        }
                        <div className={`h-[48px] w-[204px] flex items-center gap-[8px] px-[24px] py-[8px] text-black-300 rounded-[8px] ${pageSelected == "interviews" ? "opacity-100 rounded-gradient-2" : "opacity-0 rounded-gradient"} opacity-0 group-hover:opacity-100 transition ease-out duration-700`}>
                            <img src="microphone.svg" alt="" />
                            <p className="">Interviews</p>
                        </div>
                    </button> */}
                    <button onClick={()=>setPageSelected("archive")} className="group flex items-center justify-center relative">
                        {pageSelected != "archive" &&
                            <div className="h-[48px] w-[204px] flex items-center gap-[8px] px-[24px] py-[8px] border-2 border-black-500 text-black-300 rounded-[8px] opacity-100 group-hover:opacity-0 transition ease-out duration-700 absolute">

                                <img src="clock-arrow.svg" alt="" />
                                <p className="">Archive</p>
                            </div>
                        }
                        <div className={`h-[48px] w-[204px] flex items-center gap-[8px] px-[24px] py-[8px] text-black-300 rounded-[8px] ${pageSelected == "archive" ? "opacity-100 rounded-gradient-2" : "opacity-0 rounded-gradient"} opacity-0 group-hover:opacity-100 transition ease-out duration-700`}>
                            <img src="clock-arrow.svg" alt="" />
                            <p className="">Archive</p>
                        </div>
                    </button>
                    {/* <button onClick={()=>setPageSelected("reminders")} className="group flex items-center justify-center relative">
                        {pageSelected != "reminders" &&
                            <div className="h-[48px] w-[204px] flex items-center gap-[8px] px-[24px] py-[8px] border-2 border-black-500 text-black-300 rounded-[8px] opacity-100 group-hover:opacity-0 transition ease-out duration-700 absolute">

                                <img src="bulb.svg" alt="" />
                                <p className="">Reminders</p>
                            </div>
                        }
                        <div className={`h-[48px] w-[204px] flex items-center gap-[8px] px-[24px] py-[8px] text-black-300 rounded-[8px] ${pageSelected == "reminders" ? "opacity-100 rounded-gradient-2" : "opacity-0 rounded-gradient"} opacity-0 group-hover:opacity-100 transition ease-out duration-700`}>
                            <img src="bulb.svg" alt="" />
                            <p className="">Reminders</p>
                        </div>
                    </button> */}
                    <div className="flex flex-grow"></div>
                    <button onClick={LogOut} className="flex items-center gap-[8px] self-center">
                        <img className="w-[24px] h-[24px]" src="log-out.svg" alt="" />
                        <p className="text-black-400 text-[14px]">Log Out</p>
                    </button>
                </div>
            </div>
        </>
    )
}

export default UserPanel;