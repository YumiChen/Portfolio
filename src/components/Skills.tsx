const tagStyle = "inline-block my-2 mr-1 py-1 px-2 bg-amber-300 rounded-md text-lg hover:bg-white hover:text-amber-300 whitespace-nowrap";
const Skills = () =>{
    return (<section className='md:min-h-[85vh] pt-20 w-[100%] overflow-x-hidden'>
        <div className="px-7 md:px-40 pt-10">
        <ul>
          <li className="border-double border-b-4 py-2">
            <p className="flex justify-between items-end"><span className="font-bold font-serif">English</span> <span className="text-2xl align-bottom">Proficient</span></p>
            <p className="whitespace-wrap">
              <span className={tagStyle}>IELTS Band 7/ CLB 8</span> 
              <span className={tagStyle}>TOEIC Gold</span>
            </p>
          </li>
          <li className="border-double border-b-4 py-2 flex justify-between items-end"><span className="font-bold font-serif">Mandarin</span> <span className="text-2xl">Native</span></li>
          <li className="border-double border-b-4 py-2 flex justify-between items-end"><span className="font-bold font-serif">Japanese</span> <span className="text-2xl">Intermediate</span></li>
        </ul>
        <h3 className="font-bold font-serif mt-7">Front-End</h3>
        <ul className="border-double border-b-4 pt-2 pb-7 whitespace-wrap">
          <li className={tagStyle}>React.js</li>
          <li className={tagStyle}>Next.js</li>
          <li className={tagStyle}>Redux.js</li>
          <li className={tagStyle}>SWR</li>
          <li className={tagStyle}>Vue.js</li>
          <li className={tagStyle}>LitElement</li>
          <li className={tagStyle}>Web Component</li>
          <li className={tagStyle}>SASS</li>
          <li className={tagStyle}>Emotion CSS</li>
          <li className={tagStyle}>HTML5</li>
          <li className={tagStyle}>Pug</li>
          <li className={tagStyle}>Sentry.io</li>
          <li className={tagStyle}>Varnish</li>
          <li className={tagStyle}>IMA SDK</li>
        </ul>
        <h3 className="font-bold font-serif mt-7">Project Management/ Devops</h3>
        <ul className="pt-2 pb-7 whitespace-wrap">
          <li className={tagStyle}>yarn</li>
          <li className={tagStyle}>pnpm</li>
          <li className={tagStyle}>Git</li>
          <li className={tagStyle}>Nexus</li>
          <li className={tagStyle}>Drone</li>
          <li className={tagStyle}>Github Actions</li>
          <li className={tagStyle}>Docker</li>
          <li className={tagStyle}>K8s</li>
          <li className={tagStyle}>Kustomize</li>
        </ul>
        </div>
        </section>);
}

export default Skills;
