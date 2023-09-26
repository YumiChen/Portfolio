const Loader = ({ display }: { display: boolean; }) =>{
    return (<div className={`${display? 'opacity-1 pointer-events-auto' : 'opacity-0 pointer-events-none'} 
     transition-opacity absolute top-[15%] left-1/2 -translate-x-1/2 text-lg md:text-4xl
    `}>
        Loading...
    </div>);
}

export default Loader;
