const TextCircle = ({ texts }: { texts: string }) =>{    
    const textArray = texts.split('');

    if(!texts){
        return null;
    }
    return (<div className='ratate-text relative w-0 origin-center transform'>
            {textArray.map((text, index)=>(
                <span key={`${text}-${index}`} className={`text-lg h-[190px] md:text-4xl md:h-[330px] lg:h-[430px] text-yellow-200/50 absolute bottom-0 origin-[bottom_center] transform hover:bg-transparent hover:text-white/50`} style={{
                    transform: `translateX(-50%) rotate(${Math.ceil(index * 360 / textArray.length)}deg)`
                }}>
                    {text}
                </span>
            ))}
            <div className="rounded-full border-2 w-[330px] h-[330px] md:h-[580px] md:w-[580px] lg:h-[775px] lg:w-[775px] border-yellow-200/50 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="rounded-full border-2 w-[383px] h-[383px] md:h-[665px] md:w-[665px] lg:h-[867px] lg:w-[867px] border-yellow-200/50 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="rounded-full outline-dotted outline-8 border-4 w-[397px] h-[397px] md:h-[680px] md:w-[680px] lg:h-[882px] lg:w-[882px] outline-yellow-200/50 border-yellow-200/50 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>);
}

export default TextCircle;
