import SocialMedias from "./SocialMedias";
import Image from 'next/image';
import sendMailImage from '../../public/send-email.png';

const Contact = () =>{
    return (<section className='h-[90vh] w-screen overflow-x-hidden overflow-y-auto'>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3">
            <Image src={sendMailImage} alt="send email" className="mt-10 mx-auto w-[70%] md:w-[80%]" />
            <h3 className="text-center underline text-2xl md:text-3xl">
                <a href="mailto:yumichenf2e@gmail.com">yumichenf2e@gmail.com</a>
            </h3>            
            <div className={`p-4 text-4xl table mx-auto`}>
                <SocialMedias/>
            </div>
        </div>
    </section>);
}

export default Contact;
