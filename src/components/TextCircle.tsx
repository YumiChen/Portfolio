const TextCircle = ({ texts }: { texts: string }) =>{    
    const textArray = texts.split('');

    if(!texts){
        return null;
    }
    return (<div className='ratate-text relative w-0 origin-center transform'>
            {textArray.map((text, index)=>(
                <span className={`text-lg h-[190px] md:text-4xl md:h-[330px] lg:h-[430px] text-yellow-200 absolute bottom-0 origin-[bottom_center] transform hover:bg-transparent`} style={{
                    transform: `translateX(-50%) rotate(${Math.ceil(index * 360 / textArray.length)}deg)`
                }}>
                    {text}
                </span>
            ))}
        </div>);
}

export default TextCircle;
