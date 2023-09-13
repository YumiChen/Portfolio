import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScrollDownHint = ({ hintClass = ''})=>{
    return (<div className={`flex flex-col py-5 pb-7 w-screen text-center ${hintClass}`}>
    <span className="text-base md:text-lg">SCROLL DOWN</span>
    <FontAwesomeIcon icon={faChevronDown} className="text-3xl nd:text-5xl float"/>
</div>);
}

export default ScrollDownHint;