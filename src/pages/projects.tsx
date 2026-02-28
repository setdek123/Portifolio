import foto1 from '../assets/img/background.jpg'
import {MdHtml, MdJavascript, MdCss} from 'react-icons/md'
import { FaReact, FaNodeJs } from 'react-icons/fa';

import './projectsAnim.css';

const Projects = () => {
    return (
        <div className="flex  border-t border-white flex-col overflow-hidden bg-gradient-to-r from-[#000000] via-[#6441b6] to-blue-500">
            <div className='flex items-center justify-center w-full'>
                <div className='text-white flex gap-10  justify-around mt-40'>
                    <div className='anim'>
                        <MdHtml size={55} color='white'/>
                    </div>
                    <div className='anim2'>
                        <MdCss size={55} color='white'/>
                    </div>
                    <div className='anim3'>
                        <MdJavascript size={55} color='white'/>
                    </div>
                    <div className='anim4'>
                        <FaNodeJs size={55} color='white'/>
                    </div>
                    <div className='anim5'>
                        <FaReact size={55} color='white'/>
                    </div>
                
                </div>

               
        
            </div>
            <div className="p-20 mt-20">
                <h1 className="text-white text-7xl font-extrabold">Meus Projetos</h1>
                <h3 className="text-gray-400 text-xl mt-2">Meus projetos mais recentes</h3>
            </div>
            <div className="flex items-center justify-center gap-5 px-20 mt-10 mb-10 ">
                <div className="w-110  overflow-hidden shadow-xl">
                    <img src={foto1} alt="foto" className='w-110' />
                    <div className='bg-gray-400 p-5'>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias tenetur delectus reprehenderit, iure quas deleniti ullam, cumque fugit optio sequi enim commodi quisquam cum error ipsum laudantium officia fugiat? Laborum!</span>
                    </div>
                </div>
                <div className="w-110  overflow-hidden shadow-xl">
                    <img src={foto1} alt="foto" className='w-110' />
                    <div className='bg-gray-400 p-5'>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias tenetur delectus reprehenderit, iure quas deleniti ullam, cumque fugit optio sequi enim commodi quisquam cum error ipsum laudantium officia fugiat? Laborum!</span>
                    </div>
                </div>
                <div className="w-110  overflow-hidden shadow-xl">
                    <img src={foto1} alt="foto" className='w-110' />
                    <div className='bg-gray-400 p-5'>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias tenetur delectus reprehenderit, iure quas deleniti ullam, cumque fugit optio sequi enim commodi quisquam cum error ipsum laudantium officia fugiat? Laborum!</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Projects;