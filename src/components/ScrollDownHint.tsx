import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScrollDownHint = ({ hintClass = ''})=>{
    return (<div className={`inline-flex flex-col py-5 pb-7 ${hintClass}`}>
    <span className="text-base md:text-lg">SCROLL DOWN</span>
    <span className="inline-block w-[30px] h-[30px] mx-auto text-3xl nd:text-5xl float"><FontAwesomeIcon icon={faChevronDown}/></span>
</div>);
}

export default ScrollDownHint;