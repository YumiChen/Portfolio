import gsap from "gsap";
import { useEffect } from "react";

const About = () =>{    
    useEffect(()=>{
        const context = gsap.context(()=>{
            let passages = gsap.utils.toArray(".about-item"); 
            passages.forEach((passage) => {
              gsap.from(passage as HTMLElement, {
                x: 200,
                duration: 1,
                scrollTrigger: {
                  trigger: passage as HTMLElement,
                  start: "top-=100 bottom",
                  end: "bottom+=100 top",
                  toggleActions: "play reset restart reset"
                }
              });
            });
        });
      
        return () => {
            context.clear();
        };
    }, []);

    return (<section className='w-[100%] flex-col space-y-5 px-7 md:px-40 pt-20 md:pt-36 pb-10 text-2xl md:text-3xl lg:leading-[3rem]'>
        <p className="about-item">
            {"Good day! I'm a Software Engineer with 5 years of success creating engaging web applications for millions of daily active users. "}
            {"Creating amazing and performant websites with delicate "}
            {"visual effects is my passion."}
        </p>
        <p className="about-item">
            {"Worked in scrum teams with designers, business analysts, planners, back-end developers, DBA .etc. "}
            {"Being a mild team player, I believe that collaboration brings success and take the team and products further to greater achievement."}
        </p>
        </section>);
}

export default About;
