import { useRef, useState } from "react";
import { SendGet, SendPost } from '../../Hooks/useFetch';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Authentication = ({ authMode }: { authMode: string }) => {
    const navigator = useNavigate();

    // Login
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    // Register
    const emailRegisterRef = useRef<HTMLInputElement>(null);
    const passwordRegisterRef = useRef<HTMLInputElement>(null);
    const passwordConfirmationRegisterRef = useRef<HTMLInputElement>(null);

    const [buttonState, setButtonState] = useState("/");


    const RequestLogin = () => {
        setButtonState("loading");
        SendGet("login", { email: emailRef.current?.value, password: passwordRef.current?.value }).then(response => {
            setButtonState("");
            if (response.status == 400) return alert("Server error, could not log in...");
            if (response.status == 301) return alert("Account with given credentials does not exist!");

            Cookies.set("seshID", response.seshID,{expires:30});
            setButtonState("confirmed");
            setTimeout(() => {
                navigator("/");
            }, 1500);

        });
    }

    const RequestRegistration = () => {
        setButtonState("loading");
        if (passwordRegisterRef.current?.value != passwordConfirmationRegisterRef.current?.value) return alert("Passwords do not match!");
        SendPost("register", { email: emailRegisterRef.current?.value, password: passwordRegisterRef.current?.value }).then(response => {
            setButtonState("");
            if (response.status == 400) return alert("Server error, could not register...");

            Cookies.set("seshID", response.seshID,{expires:30});
            setButtonState("confirmed");
            setTimeout(() => {
                navigator("/");
            }, 1500);
        });
    }

    return (
        <>
            {
                authMode == "login" &&
                <div className="flex flex-col gap-[17px]">
                    <div className="flex flex-col gap-[16px]">
                        <p className="text-black-400 font-medium">
                            Email
                        </p>
                        <input className="px-[16px] bg-transparent border border-black-500 rounded-[8px] text-black-300 h-[48px] placeholder-black-500 outline-black-600 focus:appearance-none" placeholder="example@mail.com" type="text" ref={emailRef} />
                    </div>
                    <div className="flex flex-col gap-[16px]">
                        <p className="text-black-400 font-medium">
                            Password
                        </p>
                        <input className="px-[16px] bg-transparent border border-black-500 rounded-[8px] text-black-300 h-[48px] placeholder-black-500 outline-black-600 focus:appearance-none" placeholder="***********" type="password" ref={passwordRef} />
                    </div>
                    <button onClick={RequestLogin} className="group self-end relative">
                        <div className={`h-[48px] flex gap-[8px] items-center px-[24px] py-[8px] rounded-gradient text-green rounded-[8px] opacity-100 group-hover:opacity-0 transition ease-out duration-700 absolute ${buttonState == "confirmed" && "animate-pulse"}`}><p>{buttonState == "loading" ? "Please wait" : buttonState == "confirmed" ? "Welcome" : "Log In"}</p> {buttonState == "loading" ? <img className="w-[24px] h-[24px] animate-spin" src="loader.svg" /> : buttonState == "confirmed" ? <img className="w-[24px] h-[24px]" src="check.svg" /> : null}</div>
                        <div className="h-[48px] flex gap-[8px] items-center px-[24px] py-[8px] rounded-gradient-2 text-green rounded-[8px] opacity-0 group-hover:opacity-100 transition ease-out duration-700"><p>{buttonState == "loading" ? "Please wait" : buttonState == "confirmed" ? "Welcome" : "Log In"}</p>{buttonState == "loading" ? <img className="w-[24px] h-[24px] animate-spin" src="loader.svg" /> : buttonState == "confirmed" ? <img className="w-[24px] h-[24px]" src="check.svg" /> : null}</div>
                    </button>
                </div>
            }
            {
                authMode == "register" &&
                <div className="flex flex-col gap-[17px]">
                    <div className="flex flex-col gap-[16px]">
                        <p className="text-black-400 font-medium">
                            Email
                        </p>
                        <input className="px-[16px] bg-transparent border border-black-500 rounded-[8px] text-black-300 h-[48px] placeholder-black-500 outline-black-600 focus:appearance-none" placeholder="example@mail.com" type="text" ref={emailRegisterRef} />
                    </div>
                    <div className="flex flex-col gap-[16px]">
                        <p className="text-black-400 font-medium">
                            Password
                        </p>
                        <input className="px-[16px] bg-transparent border border-black-500 rounded-[8px] text-black-300 h-[48px] placeholder-black-500 outline-black-600 focus:appearance-none" placeholder="***********" type="password" ref={passwordRegisterRef} />
                    </div>
                    <div className="flex flex-col gap-[16px]">
                        <p className="text-black-400 font-medium">
                            Password Again
                        </p>
                        <input className="px-[16px] bg-transparent border border-black-500 rounded-[8px] text-black-300 h-[48px] placeholder-black-500 outline-black-600 focus:appearance-none" placeholder="***********" type="password" ref={passwordConfirmationRegisterRef} />
                    </div>
                    <button onClick={RequestRegistration} className="group self-end relative">
                        <div className="h-[48px] flex items-center px-[24px] py-[8px] rounded-gradient text-green rounded-[8px] opacity-100 group-hover:opacity-0 transition ease-out duration-700 absolute">Register</div>
                        <div className="h-[48px] flex items-center px-[24px] py-[8px] rounded-gradient-2 text-green rounded-[8px] opacity-0 group-hover:opacity-100 transition ease-out duration-700">Register</div>
                    </button>
                </div>
            }

        </>
    )
}

export default Authentication;