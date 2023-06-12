import { useEffect, useState } from "react";
import { SendGet, SendPost } from "../../../Hooks/useFetch";
import Notes from "../Menus/Notes";
import AddInterview from "../Menus/AddInterview";

const JobCard = ({ RefreshApplications, _id, archived, company, jobTitle, expiry, requirements, reply, applicationLink, interviewDateTime }: { RefreshApplications: Function, _id: string, company: string, jobTitle: string, expiry: string, requirements: string, reply: string, applicationLink: string, archived: boolean, interviewDateTime: string }) => {

    const [showMenu, setShowMenu] = useState(false);
    const [showReplyMenu, setShowReplyMenu] = useState(false);

    const [showNotes, setShowNotes] = useState(false);
    const [showInterviewMenu, setShowInterviewMenu] = useState(false);

    const HandleArchiveJob = () => {
        SendPost("archive-application", { jobID: _id }).then(response => {
            if (response.status != 200) return alert("Backend issue, could not archive job...");

            RefreshApplications();
        });
    }
    const HandleUpdateReply = (newReply: string) => {
        SendPost("update-reply", { jobID: _id, newReply: newReply }).then(response => {
            if (response.status != 200) return alert("Backend issue, could not update reply...");

            RefreshApplications();
            setShowReplyMenu(false);
        });
    }
    return (
        <>
            <div className="w-[400px] h-[189px] border border-black-500 rounded-[10px] flex flex-col justify-between px-[21px] py-[13px] relative linear-black overflow-y-auto">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center sm:gap-0 gap-2">
                    <div className="flex gap-[7px] items-center">
                        {/*<img src="" alt="" />*/}
                        <div className="w-[24px] h-[24px] bg-black-400 rounded-full"></div>
                        <div className="flex flex-col">
                            <a href={applicationLink} target="_blank" className="underline text-black-200">{company}</a>
                            <p className="text-[14px] text-black-400">{jobTitle}</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        {
                            expiry &&
                            <div className="flex gap-[8px] sm:self-end">
                                <p className="text-black-400">{expiry}</p>
                                <img src="clock.svg" alt="" />
                            </div>
                        }

                        {
                            interviewDateTime &&
                            <div className="flex gap-[8px] text-[12px] items-center">
                                <p className="text-black-400">{interviewDateTime.split("T")[0] + "@" + interviewDateTime.split("T")[1]}</p>
                                <img src="microphone-dark.svg" alt="" />
                            </div>
                        }

                    </div>
                </div>
                <p className="gradient-2 text-[14px]">{requirements}</p>
                <button onClick={() => setShowReplyMenu(true)} className={`self-start underline ${reply == "declined" ? "text-red" : "text-black-400"}`}>{reply ? reply.charAt(0).toUpperCase() + reply.slice(1) : "No reply specified"}</button>

                <div onMouseOver={() => setShowMenu(true)} className="bg-transparent absolute w-full h-[40%] top-[50%] translate-y-[-45%] left-0"></div>
                {
                    // Slowly hide on unload
                    showMenu &&
                    <div onMouseLeave={() => setShowMenu(false)} className="transition ease-in-out duration-500 opacity-100 hover:opacity-100 absolute glass w-full h-full top-0 left-0 rounded-[10px] flex flex-col gap-[8px] items-start p-[16px] fade-in-fast overflow-y-auto">
                        <div className="flex flex-col sm:flex-row gap-[12px]">
                            {!archived &&
                                <button onClick={HandleArchiveJob} className="group flex items-center justify-center relative rotate-[-1deg] hover:rotate-0 transition ease-in-out duration-300">
                                    <div className="h-[48px] flex items-center gap-[8px] px-[24px] py-[8px] border-2 border-black-500 text-black-300 rounded-[8px] opacity-100 group-hover:opacity-0 bg-black-600 transition ease-out duration-700 absolute">
                                        <img src="clock-arrow.svg" alt="" />
                                        <p className="">Archive job</p>
                                    </div>
                                    <div className={`h-[48px] flex items-center gap-[8px] px-[24px] py-[8px] text-black-300 rounded-[8px] rounded-gradient opacity-0 group-hover:opacity-100 transition ease-out duration-700`}>
                                        <img src="clock-arrow.svg" alt="" />
                                        <p className="">Archive job</p>
                                    </div>
                                </button>
                            }

                            <button className="cursor-not-allowed group flex items-center justify-center relative rotate-1 hover:rotate-0 transition ease-in-out duration-300">
                                <div className="h-[48px] flex items-center gap-[8px] px-[24px] py-[8px] border-2 border-red text-black-300 rounded-[8px] opacity-100 group-hover:opacity-0 bg-black-600 transition ease-out duration-700 absolute">
                                    <img src="ai.svg" alt="" />
                                    <p className="">AI functions</p>
                                </div>
                                <div className={`h-[48px] flex items-center gap-[8px] px-[24px] py-[8px] text-black-300 rounded-[8px] border-2 border-red opacity-0 group-hover:opacity-100 transition ease-out duration-700`}>
                                    <img src="ai.svg" alt="" />
                                    <p className="">AI functions</p>
                                </div>
                            </button>
                        </div>
                        <button onClick={() => setShowNotes(true)} className="group flex items-center justify-center relative rotate-2 hover:rotate-0 transition ease-in-out duration-300">
                            <div className="h-[48px] flex items-center gap-[8px] px-[24px] py-[8px] border-2 border-black-500 text-black-300 rounded-[8px] opacity-100 group-hover:opacity-0 bg-black-600 transition ease-out duration-700 absolute">
                                <img src="notes.svg" alt="" />
                                <p className="">Open notes</p>
                            </div>
                            <div className={`h-[48px] flex items-center gap-[8px] px-[24px] py-[8px] text-black-300 rounded-[8px] rounded-gradient opacity-0 group-hover:opacity-100 transition ease-out duration-700`}>
                                <img src="notes.svg" alt="" />
                                <p className="">Open notes</p>
                            </div>
                        </button>
                        {!interviewDateTime &&
                            <button onClick={() => setShowInterviewMenu(true)} className="group flex items-center justify-center relative rotate-[-2deg] hover:rotate-0 transition ease-in-out duration-300">
                                <div className="h-[48px] flex items-center gap-[8px] px-[24px] py-[8px] border-2 border-black-500 text-black-300 rounded-[8px] opacity-100 group-hover:opacity-0 bg-black-600 transition ease-out duration-700 absolute">
                                    <img src="microphone.svg" alt="" />
                                    <p className="">Add interview date</p>
                                </div>
                                <div className={`h-[48px] flex items-center gap-[8px] px-[24px] py-[8px] text-black-300 rounded-[8px] rounded-gradient opacity-0 group-hover:opacity-100 transition ease-out duration-700`}>
                                    <img src="microphone.svg" alt="" />
                                    <p className="">Add interview date</p>
                                </div>
                            </button>
                        }

                    </div>
                }
                {
                    showReplyMenu &&
                    <div onMouseLeave={() => setShowReplyMenu(false)} className="absolute w-full h-full z-40 glass rounded-[10px] flex flex-col items-center p-2 left-0 bottom-[1px] gap-[8px] justify-center">
                        <div className="flex gap-[8px]">
                            <button onClick={() => HandleUpdateReply("")} className="group flex items-center justify-center relative transition ease-in-out duration-300">
                                <div className="h-[48px] w-[150px] flex items-center gap-[8px] px-[24px] py-[8px] border-2 border-black-500 text-black-300 rounded-[8px] opacity-100 group-hover:opacity-0 bg-black-600 transition ease-out duration-700 absolute">
                                    <img src="no-reply.svg" alt="" />
                                    <p className="">No reply</p>
                                </div>
                                <div className={`h-[48px] w-[150px] flex items-center gap-[8px] px-[24px] py-[8px] text-black-300 rounded-[8px] rounded-gradient opacity-0 group-hover:opacity-100 transition ease-out duration-700`}>
                                    <img src="no-reply.svg" alt="" />
                                    <p className="">No reply</p>
                                </div>
                            </button>
                            <button onClick={() => HandleUpdateReply("interview")} className="group flex items-center justify-center relative transition ease-in-out duration-300">
                                <div className="h-[48px] w-[150px] flex items-center gap-[8px] px-[24px] py-[8px] border-2 border-black-500 text-black-300 rounded-[8px] opacity-100 group-hover:opacity-0 bg-black-600 transition ease-out duration-700 absolute">
                                    <img src="microphone.svg" alt="" />
                                    <p className="">Interview</p>
                                </div>
                                <div className={`h-[48px] w-[150px] flex items-center gap-[8px] px-[24px] py-[8px] text-black-300 rounded-[8px] rounded-gradient opacity-0 group-hover:opacity-100 transition ease-out duration-700`}>
                                    <img src="microphone.svg" alt="" />
                                    <p className="">Interview</p>
                                </div>
                            </button>
                        </div>

                        <button onClick={() => HandleUpdateReply("declined")} className="group flex items-center justify-center relative transition ease-in-out duration-300">
                            <div className="h-[48px] w-[150px] flex items-center gap-[8px] px-[24px] py-[8px] border-2 border-black-500 text-black-300 rounded-[8px] opacity-100 group-hover:opacity-0 bg-black-600 transition ease-out duration-700 absolute">
                                <img src="declined.svg" alt="" />
                                <p className="">Declined</p>
                            </div>
                            <div className={`h-[48px] w-[150px] flex items-center gap-[8px] px-[24px] py-[8px] text-black-300 rounded-[8px] rounded-gradient opacity-0 group-hover:opacity-100 transition ease-out duration-700`}>
                                <img src="declined.svg" alt="" />
                                <p className="">Declined</p>
                            </div>
                        </button>
                    </div>
                }

                {
                    showNotes &&
                    <Notes _id={_id} company={company} setShowNotes={setShowNotes} />
                }
                {
                    showInterviewMenu &&
                    <AddInterview _id={_id} company={company} setShowAddInterview={setShowInterviewMenu} RefreshApplications={RefreshApplications} />
                }

            </div>
        </>
    )
}

export default JobCard;