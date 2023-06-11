import { useEffect, useRef, useState } from "react";
import { SendGet, SendPost } from "../../../Hooks/useFetch";
import { TNote } from "../../types";

const Notes = ({ setShowNotes,company,_id }: { setShowNotes: Function,company:string,_id:string }) => {

    const [buttonState, setButtonState] = useState("/");
    const [browseMode, setBrowseMode] = useState(true);

    const titleRef = useRef<HTMLInputElement>(null);
    const noteRef = useRef<HTMLTextAreaElement>(null);


    const [notes,setNotes] = useState<TNote[]>([]);

    const RefreshNotes = () =>{
        SendGet("get-notes",{jobID:_id}).then(response=>{
            if(response.status!=200) return alert("Could not get notes, server error");

            setNotes(response.notes);
        });
    }

    const HandleAddNote = ()=>{
        SendPost("add-note",{
            jobID:_id,
            title:titleRef.current?.value,
            note:noteRef.current?.value
        }).then(response=>{
            if(response.status!=200) return alert("Could not add note, server error...");
            RefreshNotes();
            setBrowseMode(true);

        });
    }

    useEffect(()=>{
        RefreshNotes();
    },[]);

    return (
        <>
            {
                !browseMode &&
                <div className="fixed z-50 h-[80%] w-[70%] top-[50%] left-[50%] translate-x-[-36%] translate-y-[-50%] glass rounded-[20px] flex flex-col items-center px-[16px] py-[32px]">
                    <h1 className="gradient-1 text-[36px] ">Add a new note</h1>
                    <button onClick={() => setShowNotes(false)} className="absolute right-10 top-[45px]">
                        <img src="exit.svg" alt="" />
                    </button>

                    <div className="flex flex-col gap-[16px] w-[294px] mt-7">
                        <p className="text-black-300 font-medium">
                            Note Title
                        </p>
                        <input className="px-[16px] bg-transparent border border-black-300 rounded-[8px] text-black-300 h-[48px] placeholder-black-400 outline-black-500 focus:appearance-none" placeholder="ex. Pet friendly" type="text" name="title" ref={titleRef} />
                    </div>
                    <div className="flex flex-col gap-[16px] w-[294px] mt-5">
                        <p className="text-black-300 font-medium">
                            Note
                        </p>
                        <textarea className="px-[16px] py-[8px] bg-transparent border border-black-300 rounded-[8px] text-black-300 placeholder-black-400 outline-black-500 focus:appearance-none" placeholder="ex. This company allows pets in the workspace" rows={10} name="note" ref={noteRef}></textarea>
                    </div>
                    <button onClick={HandleAddNote} className="group mt-5 relative w-[294px]">
                        <div className={`h-[48px] w-full flex items-center justify-center px-[24px] py-[8px] rounded-gradient text-green rounded-[8px] opacity-100 group-hover:opacity-0 transition ease-out duration-700 absolute ${(buttonState == "confirmed" || buttonState == "loading") && "animate-pulse"}`}><p>Add note</p> {buttonState == "loading" ? <img className="w-[24px] h-[24px] animate-spin" src="loader.svg" /> : buttonState == "confirmed" ? <img className="w-[24px] h-[24px]" src="check.svg" /> : null}</div>
                        <div className={`h-[48px] w-full flex items-center justify-center px-[24px] py-[8px] rounded-gradient-2 text-green rounded-[8px] opacity-0 group-hover:opacity-100 transition ease-out duration-700 ${(buttonState == "confirmed" || buttonState == "loading") && "animate-pulse"}`}><p>Add note</p> {buttonState == "loading" ? <img className="w-[24px] h-[24px] animate-spin" src="loader.svg" /> : buttonState == "confirmed" ? <img className="w-[24px] h-[24px]" src="check.svg" /> : null}</div>
                    </button>
                </div>
            }
            {
                browseMode&&
                <div className="fixed z-50 h-[80%] w-[70%] top-[50%] left-[50%] translate-x-[-36%] translate-y-[-50%] glass rounded-[20px] fade-in-fast flex flex-col items-center px-[16px] py-[32px]">
                    <div className="flex flex-col items-center">
                        <h1 className="gradient-1 text-[36px] ">Notes</h1>
                        <p className="text-black-300">{company}</p>
                    </div>

                    <button onClick={() => setShowNotes(false)} className="absolute right-10 top-[45px]">
                        <img src="exit.svg" alt="" />
                    </button>

                    <button onClick={()=>setBrowseMode(false)} className="group mt-5 relative w-[294px]">
                        <div className={`h-[48px] w-full flex items-center justify-center px-[24px] py-[8px] border-2 border-black-300 text-black-300 rounded-[8px] opacity-100 group-hover:opacity-0 transition ease-out duration-700 absolute`}><p>Add a note</p></div>
                        <div className={`h-[48px] w-full flex items-center justify-center px-[24px] py-[8px] rounded-gradient text-green rounded-[8px] opacity-0 group-hover:opacity-100 transition ease-out duration-700`}><p>Add a note</p></div>
                    </button>

                    <div className="flex flex-wrap gap-[8px]">
                        {
                            notes.map(note=>(
                                <div className="">{note.title}</div>
                            ))
                        }
                    </div>
                </div>
            }

        </>
    )
}

export default Notes;