const JobCard = () => {
    return (
        <>
            <div className="w-[409px] h-[189px] border border-black-500 rounded-[10px] flex flex-col justify-between px-[21px] py-[13px] relative">
                <div className="flex justify-between items-center">
                    <div className="flex gap-[7px] items-center">
                        {/*<img src="" alt="" />*/}
                        <div className="w-[24px] h-[24px] bg-black-400 rounded-full"></div>
                        <div className="flex flex-col">
                            <a href="#" target="_blank" className="underline text-black-200">Artificium</a>
                            <p className="text-[14px] text-black-400">Front end developer</p>
                        </div>
                    </div>
                    <div className="flex gap-[8px]">
                        <p className="text-black-400">12.02.2022</p>
                        <img src="clock.svg" alt="" />
                    </div>
                </div>
                <p className="gradient-2 text-[14px]">Javascript, Typescript, React, NODEjs, Docker</p>
                <button className="self-start underline text-black-400">No reply specified</button>


                <div className="transition ease-in-out duration-500 opacity-0 hover:opacity-100 absolute glass w-full h-full top-0 left-0 rounded-[10px] flex flex-col gap-[8px] items-start p-[16px]">
                    <div className="flex gap-[12px]">
                        <button className="group flex items-center justify-center relative rotate-[-1deg] hover:rotate-0 transition ease-in-out duration-300">
                            <div className="h-[48px] flex items-center gap-[8px] px-[24px] py-[8px] border-2 border-black-500 text-black-300 rounded-[8px] opacity-100 group-hover:opacity-0 bg-black-600 transition ease-out duration-700 absolute">
                                <img src="clock-arrow.svg" alt="" />
                                <p className="">Archive job</p>
                            </div>
                            <div className={`h-[48px] flex items-center gap-[8px] px-[24px] py-[8px] text-black-300 rounded-[8px] rounded-gradient opacity-0 group-hover:opacity-100 transition ease-out duration-700`}>
                                <img src="clock-arrow.svg" alt="" />
                                <p className="">Archive job</p>
                            </div>
                        </button>
                        <button className="group flex items-center justify-center relative rotate-1 hover:rotate-0 transition ease-in-out duration-300">
                            <div className="h-[48px] flex items-center gap-[8px] px-[24px] py-[8px] border-2 border-black-500 text-black-300 rounded-[8px] opacity-100 group-hover:opacity-0 bg-black-600 transition ease-out duration-700 absolute">
                                <img src="ai.svg" alt="" />
                                <p className="">AI functions</p>
                            </div>
                            <div className={`h-[48px] flex items-center gap-[8px] px-[24px] py-[8px] text-black-300 rounded-[8px] rounded-gradient opacity-0 group-hover:opacity-100 transition ease-out duration-700`}>
                                <img src="ai.svg" alt="" />
                                <p className="">AI functions</p>
                            </div>
                        </button>
                    </div>
                    <button className="group flex items-center justify-center relative rotate-2 hover:rotate-0 transition ease-in-out duration-300">
                        <div className="h-[48px] flex items-center gap-[8px] px-[24px] py-[8px] border-2 border-black-500 text-black-300 rounded-[8px] opacity-100 group-hover:opacity-0 bg-black-600 transition ease-out duration-700 absolute">
                            <img src="notes.svg" alt="" />
                            <p className="">Open notes</p>
                        </div>
                        <div className={`h-[48px] flex items-center gap-[8px] px-[24px] py-[8px] text-black-300 rounded-[8px] rounded-gradient opacity-0 group-hover:opacity-100 transition ease-out duration-700`}>
                            <img src="notes.svg" alt="" />
                            <p className="">Open notes</p>
                        </div>
                    </button>
                    <button className="group flex items-center justify-center relative rotate-[-2deg] hover:rotate-0 transition ease-in-out duration-300">
                        <div className="h-[48px] flex items-center gap-[8px] px-[24px] py-[8px] border-2 border-black-500 text-black-300 rounded-[8px] opacity-100 group-hover:opacity-0 bg-black-600 transition ease-out duration-700 absolute">
                            <img src="notes.svg" alt="" />
                            <p className="">Add interview date</p>
                        </div>
                        <div className={`h-[48px] flex items-center gap-[8px] px-[24px] py-[8px] text-black-300 rounded-[8px] rounded-gradient opacity-0 group-hover:opacity-100 transition ease-out duration-700`}>
                            <img src="notes.svg" alt="" />
                            <p className="">Add interview date</p>
                        </div>
                    </button>

                </div>
            </div>
        </>
    )
}

export default JobCard;