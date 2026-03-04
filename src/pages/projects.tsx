import perfil from '../assets/img/background.jpg'
import { MdHtml, MdCss, MdJavascript } from 'react-icons/md';
import { FaReact, FaNodeJs } from 'react-icons/fa';


const Projects = () => {
    return (
       <div className=" bg-[#0F0F0F] flex flex-col h-screen px-5">
            <div className="flex flex-col md:mt-40 mt-15">
                <h2 className="text-white font-bold md:text-5xl text-2xl"> Lastest Projects</h2>
                <span className="text-gray-800">____________________________</span>
            </div>
            
            <div className="flex items-center gap-15 bg-[#131313] overflow-hidden md:w-80 w-87  md:h-40 h-30 rounded-xl border border-[#161616] mt-10 ">
                <img src={perfil} className='w-30 h-30' />
                <div className='flex flex-col gap-5'>
                    <span className='text-white'>Lista de tarefas</span>
                    <button className='text-white p-1 bg-[#7456FF] rounded-md'>Link do Projeto</button>
                </div>
            </div>
            <div className='flex justify-around mt-5 border border-[#161616] rounded-full'>
                <MdHtml size={40} color='white'/>
                <MdCss size={40} color='white'/>
                <MdJavascript size={40} color='white'/>
                <FaReact size={37} color='white'/>
            </div>

            <div className="flex items-center gap-15 bg-[#131313] overflow-hidden md:w-80 w-87  md:h-40 h-30 rounded-xl border border-[#161616] mt-10 ">
                <img src={perfil} className='w-30 h-30' />
                <div className='flex flex-col gap-5'>
                    <span className='text-white'>Lista de tarefas</span>
                    <button className='text-white p-1 bg-[#7456FF] rounded-md'>Link do Projeto</button>
                </div>
            </div>
            <div className='flex justify-around mt-5 border border-[#161616] rounded-full'>
                <MdHtml size={40} color='white'/>
                <MdCss size={40} color='white'/>
                <MdJavascript size={40} color='white'/>
                <FaReact size={37} color='white'/>
            </div>
            
            
       </div>
    )
};

export default Projects;