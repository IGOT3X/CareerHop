import { useRef, useState } from "react";
import { SendPost } from "../../../Hooks/useFetch";

const AddApplication = ({ setShowAddApplication }: { setShowAddApplication: Function }) => {

    const companyRef = useRef<HTMLInputElement>(null);
    const positionRef = useRef<HTMLInputElement>(null);
    const jobRequirementsRef = useRef<HTMLInputElement>(null);
    const expiryRef = useRef<HTMLInputElement>(null);
    const applicationLinkRef = useRef<HTMLInputElement>(null);

    const [buttonState, setButtonState] = useState("/");



    const HandleAddApplication = () => {
        setButtonState("loading")
        SendPost("add-application", {
            company: companyRef.current?.value,
            jobTitle: positionRef.current?.value,
            requirements: jobRequirementsRef.current?.value,
            expiry: expiryRef.current?.value,
            applicationLink: applicationLinkRef.current?.value
        }).then(response => {
            if (response.status != 200) return alert("Server problem with adding the job application");

            setButtonState("confirmed");
            setTimeout(() => {
                setShowAddApplication(false);
            }, 1000);

        })
    }
    return (
        <>
            <div className="fixed z-50 h-[80%] w-[70%] top-[50%] left-[50%] translate-x-[-36%] translate-y-[-50%] glass rounded-[20px] fade-in-fast flex flex-col items-center px-[16px] py-[32px]">
                <h1 className="gradient-1 text-[36px] ">Add a new application</h1>
                <button onClick={() => setShowAddApplication(false)} className="absolute right-10 top-[45px]">
                    <img src="exit.svg" alt="" />
                </button>

                <div className="flex flex-col gap-[16px] w-[294px] mt-7">
                    <p className="text-black-300 font-medium">
                        Company
                    </p>
                    <input className="px-[16px] bg-transparent border border-black-300 rounded-[8px] text-black-300 h-[48px] placeholder-black-400 outline-black-500 focus:appearance-none" placeholder="ex. Apple" type="text" name="company" ref={companyRef} />
                </div>
                <div className="flex flex-col gap-[16px] w-[294px] mt-5">
                    <p className="text-black-300 font-medium">
                        Position
                    </p>
                    <input className="px-[16px] bg-transparent border border-black-300 rounded-[8px] text-black-300 h-[48px] placeholder-black-400 outline-black-500 focus:appearance-none" placeholder="ex. Front end developer" type="text" name="position" ref={positionRef} />
                </div>
                <div className="flex flex-col gap-[16px] w-[294px] mt-5">
                    <p className="text-black-300 font-medium">
                        Job requirements
                    </p>
                    <input className="px-[16px] bg-transparent border border-black-300 rounded-[8px] text-black-300 h-[48px] placeholder-black-400 outline-black-500 focus:appearance-none" placeholder="Javascript, Typescript..." type="text" name="requirements" ref={jobRequirementsRef} />
                </div>
                <div className="flex flex-col gap-[16px] w-[294px] mt-5">
                    <p className="text-black-300 font-medium">
                        Application expiry date
                    </p>
                    <input className="px-[16px] bg-transparent border border-black-300 rounded-[8px] text-black-300 h-[48px] placeholder-black-400 outline-black-500 focus:appearance-none" placeholder="" type="date" name="expiry" ref={expiryRef} />
                </div>
                <div className="flex flex-col gap-[16px] w-[294px] mt-5">
                    <p className="text-black-300 font-medium">
                        Application link
                    </p>
                    <input className="px-[16px] bg-transparent border border-black-300 rounded-[8px] text-black-300 h-[48px] placeholder-black-400 outline-black-500 focus:appearance-none" placeholder="https://link.com/" type="text" name="job link" ref={applicationLinkRef} />
                </div>
                <button onClick={HandleAddApplication} className="group mt-5 relative w-[294px]">
                    <div className={`h-[48px] w-full flex items-center justify-center px-[24px] py-[8px] rounded-gradient text-green rounded-[8px] opacity-100 group-hover:opacity-0 transition ease-out duration-700 absolute ${(buttonState == "confirmed" || buttonState=="loading") && "animate-pulse"}`}><p>Add Job</p> {buttonState == "loading" ? <img className="w-[24px] h-[24px] animate-spin" src="loader.svg" /> : buttonState == "confirmed" ? <img className="w-[24px] h-[24px]" src="check.svg" /> : null}</div>
                    <div className={`h-[48px] w-full flex items-center justify-center px-[24px] py-[8px] rounded-gradient-2 text-green rounded-[8px] opacity-0 group-hover:opacity-100 transition ease-out duration-700 ${(buttonState == "confirmed" || buttonState=="loading") && "animate-pulse"}`}><p>Add Job</p> {buttonState == "loading" ? <img className="w-[24px] h-[24px] animate-spin" src="loader.svg" /> : buttonState == "confirmed" ? <img className="w-[24px] h-[24px]" src="check.svg" /> : null}</div>
                </button>
            </div>
        </>
    )
}

export default AddApplication;