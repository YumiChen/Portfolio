import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome/index";
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

interface SocialMediasProps {
  linkClass?: string;
}
const SocialMedias = ({ linkClass = '' }: SocialMediasProps) => {
    return (<ul className="flex space-x-3">
        <li>
          <a href="https://www.linkedin.com/in/yumichenart" target="_blank" className={linkClass}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
        <a href="mailto:yumichenf2e@gmail.com" className={linkClass}>
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a href="https://github.com/YumiChen?tab=repositories" target="_blank" className={linkClass}>
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1MsHpWpz1D6EMlt47rW84Fh7DxNgatB5q/view?usp=sharing" target="_blank" className={linkClass}>
            <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
          </a>
        </li>
      </ul>);
};

export default SocialMedias;