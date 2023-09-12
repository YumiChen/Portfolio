import SocialMedias from '@/components/SocialMedias';

const Top = () =>{
    return (<section className='h-screen w-screen overflow-x-hidden overflow-y-auto'>
        <div className="absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <p className="md:text-4xl">{"Hello! I'm"}</p>
            <h1 className="playful font-lobster text-8xl text-white md:text-9xl">Yumi Chen</h1>
            <h2 className="w-[70vw] mx-auto  flag text-center my-5 text-3xl whitespace-nowrap font-amaticSC md:text-4xl">Front-end Engineer</h2>
            <div className={`p-4 text-4xl table mx-auto md:text-5xl`}>
                <SocialMedias/>
            </div>
        </div>
        <p className='w-full text-center absolute bottom-7 px-3 text-sm md:text-lg'>Latest versions of Chrome, Edge, Safari, Firefox, Opera are recommended</p>
    </section>);
}

export default Top;