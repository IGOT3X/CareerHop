const JobCard = ()=>{
    return(
        <>
            <div className="w-[409px] h-[189px] border border-black-500 rounded-[10px] flex flex-col justify-between px-[21px] py-[13px]">
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
            </div>
        </>
    )
}

export default JobCard;