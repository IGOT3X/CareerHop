const NoteCard = ({_id,title,note}:{_id:string,title:string,note:string})=>{
    return(
        <>
            <div className="w-[350px] h-[189px] border border-black-500 rounded-[10px] flex flex-col gap-[8px] px-[21px] py-[13px] relative linear-black overflow-y-auto">
                <h1 className="text-black-300 text-[20px]">{title}</h1>
                <p className="text-black-300">{note}</p>
            </div>
        </>
    )
}

export default NoteCard;