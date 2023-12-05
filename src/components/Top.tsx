import ScrollDownHint from './ScrollDownHint';
import SocialMedias from '@/components/SocialMedias';
import TextCircle from './TextCircle';

const Top = () =>{
    return (<section className='w-screen overflow-x-hidden overflow-y-auto'>
        <div className="w-full absolute text-center top-[17vh] md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2">
            <p className="text-2xl md:text-4xl">{"Hello! I'm"}</p>
            <h1 className="subtitle font-lobster text-8xl text-white md:text-9xl">Yumi Chen</h1>
            <h2 className="w-[80vw] md:w-[80vw] lg:w-[70vw] mx-auto  flag text-center my-5 text-lg whitespace-nowrap font-serif font-bold md:text-4xl">Software Engineer</h2>
            <div className={`py-2 text-3xl table mx-auto h-14 md:h-20 md:text-5xl`}>
                <SocialMedias/>
            </div>
            <div className='block md:hidden pt-2 px-5 text-sm'>
                <ScrollDownHint hintClass='pb-1'/>
                <p>Latest versions of Chrome, Edge, Safari, Firefox, Opera are recommended</p>
            </div>
            <div className='absolute top-[100px] md:top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10'>
                <TextCircle texts="Software Engineer◆Software Engineer◆Software Engineer◆"/>
            </div>
        </div>
        <div className='hidden md:block w-full text-center pb-10 absolute top-[100vh] transform -translate-y-full px-5 text-lg'>
            <ScrollDownHint hintClass='pb-1'/>
            <p>Latest versions of Chrome, Edge, Safari, Firefox, Opera are recommended</p>
        </div>
    </section>);
}

export default Top;