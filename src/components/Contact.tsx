import SocialMedias from "./SocialMedias";

const Contact = () =>{
    return (<section className='h-screen w-screen overflow-x-hidden overflow-y-auto'>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3">
            <img src="/send-email.png" alt="send email" className="mt-10 mx-auto w-[70%] md:w-[80%]" />
            <h3 className="text-center underline text-2xl md:text-3xl">
                <a href="mailto:yumichenf2e@gmail.com">yumichenf2e@gmail.com</a>
            </h3>            
            <div className={`p-4 text-4xl table mx-auto`}>
                <SocialMedias/>
            </div>
        </div>
        <footer className="px-3 text-sm md:text-lg text-center absolute bottom-7 w-full leading-6">
            <p>Latest versions of Chrome, Edge, Safari, Firefox, Opera are recommended</p>
            <p>© 2023 Yumi Chen | All Rights Reserved</p>
            <a href="https://lordicon.com/">Icons by Lordicon.com</a>
        </footer>
    </section>);
}

export default Contact;
