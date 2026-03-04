import profile from '../assets/img/perfil.png';
import { MdWhatsapp, MdFacebook } from 'react-icons/md';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import Projects from './projects';



const Home = () => {
    return (
        <>
            <div className="flex h-screen items-center justify-around bg-[#0C0C0C] px-5 py-35">
                <div className="flex flex-col w-220 ">
                    <div className="flex flex-col gap-5">
                        <h2 className="text-white font-bold md:text-4xl -mt-20 text-2xl">Olá!</h2>
                        <h1 className="font-semibold text-white md:text-7xl text-4xl">IM <strong className="font-extrabold text-[#7456FF]">Alan rodrigues</strong></h1>
                        <h3 className="text-[#999999] md:text-2xl text-xl">Ui Designer Junior</h3>
                    </div>
                    <div className="flex flex-col gap-10">
                        <span className="text-gray-300 font-bold">___________</span>
                        <span className="text-[#999999] md:text-3xl text-xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto 
                            praesentium id voluptas 
                            laboriosam quis. Itaque a nihil officiis repellat perspiciatis 
                            dolorem vel incidunt quo doloremque nesciunt possimus, 
                            dolorum distinctio modi.
                        </span>
                        <div className='flex gap-5'>
                            <button className='text-white font-semibold w-40 bg-[#7456FF] p-3.5 rounded-md'>Download Cv</button>
                            <button className='text-white font-bold border p-3.5 rounded-md w-40 border-gray-50'>More</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-28">
                    
                    <div className='border-[#7456FF] border md:w-110 hidden top-20 right-25 md:relative absolute md:h-110 h-25 w-25 items-center md:flex justify-center rounded-full  bg-[#161324]'>
                        <img src={profile} className='md:w-100 w-15 rounded-full ' />
                    </div>
                        
                    
                    <div className="flex gap-10 items-center md:flex md:items-center md:justify-center -ml-30  md:-ml-70 md:mt-15 bottom-0 left-30 md:relative absolute ">
                        <div className='flex flex-col mt-20'>
                            <p className="text-white font-semibold hidden md:flex">Find Me On</p>
                        </div>
                        <div className='flex gap-10 items-center mt-20'>
                            <div className='bg-[#161324] p-3 rounded-full'>
                                <MdWhatsapp size={25} color='#7456FF'/>
                            </div>
                            <div className='bg-[#161324] p-3 rounded-full'>
                                <MdFacebook size={25} color='#7456FF'/>
                            </div>
                            <div className='bg-[#161324] p-3 rounded-full'>
                                <FaInstagram size={25} color='#7456FF'/>
                            </div>
                            <div className='bg-[#161324] p-3 rounded-full'>
                                <FaLinkedin size={25} color='#7456FF'/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/*PROJECTS PAGE */}
            <div>
                <Projects/>
            </div>
        </>
    )
};

export default Home;