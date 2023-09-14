import SocialMedias from '@/components/SocialMedias';
import ScrollDownHint from './ScrollDownHint';

const Top = () =>{
    return (<section className='w-screen overflow-x-hidden overflow-y-auto'>
        <div className="absolute text-center top-28 md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2">
            <p className="text-2xl md:text-4xl">{"Hello! I'm"}</p>
            <h1 className="playful font-lobster text-8xl text-white md:text-9xl">Yumi Chen</h1>
            <h2 className="w-[70vw] mx-auto  flag text-center my-5 text-3xl whitespace-nowrap font-amaticSC md:text-4xl">Front-end Engineer</h2>
            <div className={`py-2 text-3xl table mx-auto h-14 md:h-20 md:text-5xl`}>
                <SocialMedias/>
            </div>
        </div>
        <div className='w-full text-center absolute bottom-7 px-5 text-sm md:text-lg'>
            <ScrollDownHint hintClass='pb-1'/>
            <p>Latest versions of Chrome, Edge, Safari, Firefox, Opera are recommended</p>
        </div>
    </section>);
}

export default Top;