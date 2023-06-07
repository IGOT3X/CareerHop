import Cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Authentication from "../Components/Authentication";

const Auth = () => {

    const navigator = useNavigate();

    const [authMode,setAuthMode] = useState("login");

    useEffect(() => {
        if (Cookies.get("seshID")) return navigator("/");

    }, []);
    return (
        <>
            <div className="flex items-center justify-center w-screen h-screen gap-[15px]">
                <div className="w-[500px] h-[571px] bg-black-600 rounded-[20px] px-[60px] py-[25px] flex flex-col justify-between">
                    <div className="flex flex-col gap-[14px]">
                        <h1 className="text-[32px] gradient-1">{authMode=="login"?"LogIn":"Register"}</h1>
                        <p className="text-black-400 font-medium">In order to use "CareerHop" you need to sign in. </p>
                    </div>
                        <Authentication authMode={authMode}/>
                    <div className="flex gap-[8px] self-center text-black-400">
                        <p className="font-medium">Created by: Luka Igrutinović</p>
                        <a href="https://www.github.com/igot3x" target="_blank"><img className="w-[24px] h-[24px] transition ease-in-out duration-700 hover:scale-105" src="github.svg" alt="" /></a>
                    </div>

                </div>
                <div className="flex flex-col gap-[15px]">
                    <div className="w-[286px] h-[354px] bg-black-600 rounded-[20px] flex flex-col gap-[27px] py-[25px] px-[17px] text-black-400">
                        <h1 className="text-black-200 text-[24px] self-center">Features?</h1>
                        <div className="flex flex-col gap-[13px]">
                            <div className="flex gap-[13px]">
                                <img className="w-[24px] h-[24px]" src="puzzle.svg" alt="" />
                                <p>Track job applications</p>
                            </div>
                            <div className="flex gap-[13px]">
                                <img className="w-[24px] h-[24px]" src="puzzle.svg" alt="" />
                                <p>Track job requirements</p>
                            </div>
                            <div className="flex gap-[13px]">
                                <img className="w-[24px] h-[24px]" src="puzzle.svg" alt="" />
                                <p>Track interview schedules</p>
                            </div>
                            <div className="flex gap-[13px]">
                                <img className="w-[24px] h-[24px]" src="puzzle.svg" alt="" />
                                <p>Company info lookup</p>
                            </div>
                            <div className="flex gap-[13px]">
                                <img className="w-[24px] h-[24px]" src="puzzle.svg" alt="" />
                                <p>AI assisted cover letter generator</p>
                            </div>
                            <div className="flex gap-[13px]">
                                <img className="w-[24px] h-[24px]" src="puzzle.svg" alt="" />
                                <p>Notes for each job application</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[286px] h-[202px] bg-black-600 rounded-[20px] flex flex-col gap-[27px] py-[25px] px-[17px] text-black-400">
                        <h1 className="text-black-200 text-[24px] self-center">{authMode=="login" ? "No account?" : "Have an account?"}</h1>
                        <button onClick={()=>authMode=="login"?setAuthMode("register"):setAuthMode("login")} className="group flex items-center justify-center relative">
                            <div className="h-[48px] flex items-center px-[24px] py-[8px] border border-black-500 text-black-400 rounded-[8px] opacity-100 group-hover:opacity-0 transition ease-out duration-700 absolute">{authMode=="login" ? "Register" : "LogIn"}</div>
                            <div className="h-[48px] flex items-center px-[24px] py-[8px] rounded-gradient-2 text-green rounded-[8px] opacity-0 group-hover:opacity-100 transition ease-out duration-700">{authMode=="login" ? "Register" : "LogIn"}</div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth;