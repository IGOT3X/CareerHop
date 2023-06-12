import { useRef, useState } from "react";
import { SendPost } from "../../../Hooks/useFetch";

const AddInterview = ({setShowAddInterview,_id,company,RefreshApplications}:{setShowAddInterview:Function,_id:string,company:string,RefreshApplications:Function}) => {

    const dateRef = useRef<HTMLInputElement>(null);

    const [buttonState,setButtonState] = useState("/");

    const HandleAddInterviewDate = () =>{
        setButtonState("loading");

        SendPost("add-interview",{jobID:_id,dateTime:dateRef.current?.value}).then(response=>{
            if(response.status!=200) return alert("Could not add interview reminder, backend error...");

            setButtonState("confirmed");
            setTimeout(()=>{
                setShowAddInterview(false);
                RefreshApplications();
            },1000);

        });
    }

    return (
        <>
            <div className="fixed z-50 w-full h-full inset-0 glass rounded-[20px] fade-in-fast flex flex-col items-center px-[16px] py-[32px]">
                <h1 className="gradient-1 text-[36px] ">Add interview reminder</h1>
                <button onClick={() => setShowAddInterview(false)} className="absolute right-10 top-[45px]">
                    <img src="exit.svg" alt="" />
                </button>

                <div className="flex flex-col gap-[16px] w-[294px] mt-7">
                    <p className="text-black-300 font-medium">
                        Interview date and time
                    </p>
                    <input className="px-[16px] bg-transparent border border-black-300 rounded-[8px] text-black-300 h-[48px] placeholder-black-400 outline-black-500 focus:appearance-none" placeholder="ex. Apple" type="datetime-local" name="date" ref={dateRef} />
                </div>
                <button onClick={HandleAddInterviewDate} className="group mt-5 relative w-[294px]">
                    <div className={`h-[48px] w-full flex items-center justify-center px-[24px] py-[8px] rounded-gradient text-green rounded-[8px] opacity-100 group-hover:opacity-0 transition ease-out duration-700 absolute ${(buttonState == "confirmed" || buttonState == "loading") && "animate-pulse"}`}><p>Add Interview</p> {buttonState == "loading" ? <img className="w-[24px] h-[24px] animate-spin" src="loader.svg" /> : buttonState == "confirmed" ? <img className="w-[24px] h-[24px]" src="check.svg" /> : null}</div>
                    <div className={`h-[48px] w-full flex items-center justify-center px-[24px] py-[8px] rounded-gradient-2 text-green rounded-[8px] opacity-0 group-hover:opacity-100 transition ease-out duration-700 ${(buttonState == "confirmed" || buttonState == "loading") && "animate-pulse"}`}><p>Add Interview</p> {buttonState == "loading" ? <img className="w-[24px] h-[24px] animate-spin" src="loader.svg" /> : buttonState == "confirmed" ? <img className="w-[24px] h-[24px]" src="check.svg" /> : null}</div>
                </button>
            </div>
        </>
    )
}

export default AddInterview;