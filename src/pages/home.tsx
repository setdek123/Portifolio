import Button from "../components/button";
import Projects from "./projects";

import perfil from "../assets/img/perfil.png";
import "./animImg.css";

import {MdHtml, MdCss, MdJavascript} from 'react-icons/md';
import {FaReact} from 'react-icons/fa';

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {

    useEffect(() => {
        AOS.init({
          duration: 2500, 
          once: true,     
        });
      }, []);
    
    return (
        <div className="flex flex-col  bg-black">
             <div className="flex flex-col bg-gradient-to-r from-[#000] via-[#311278] to-blue-500">
                    
                <div className="flex mt-10 justify-between">
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col px-20">
                            <h3 className="text-gray-400 text-xl mt-50 mb-5" data-aos="fade-right" data-aos-delay="400">Oi, eu sou Desenvolvedor Junior</h3>
                            <h2 className="text-8xl font-extrabold text-white" data-aos="fade-down" data-aos-delay="500">Eu construo aplicações</h2>
                            <h2 className="text-8xl font-extrabold text-white" data-aos="fade-up" data-aos-delay="700">Web Modernas</h2>
                        </div>
                        <div className="flex px-20 mt-10 mb-50" data-aos="fade-up" data-aos-delay="200">
                            <Button children={'Click here'} onclickt={()=>console.log("Button clicado!")}/>
                        </div>
                    </div>
                    <div className="mr-20 -mt-37" style={{
                    
                      filter: "brightness(70%)" 
                    }}>
                        <img src={perfil} className="w-150 " data-aos="fade-left" data-aos-delay="400"/>
                        <div className="amiImg absolute top-100 left-40">
                            <div className="p-2  w-10 h-10 rounded-full items-center justify-center">
                                <MdHtml size={70} color="white"/>
                            </div>
                        </div>
                        <div className="anim2 flex items-center justify-center absolute top-100 left-40">
                            <div className="p-2  w-10 h-10 rounded-full items-center justify-center">
                                <MdCss size={70} color="white"/>
                            </div>
                        </div>
                        <div className="animReact flex items-center justify-center absolute top-100 left-40">
                            <div className="p-2  w-10 h-10 rounded-full items-center justify-center">
                                <FaReact size={70} color="white"/>
                            </div>
                        </div>
                        <div className="animJavascript flex items-center justify-center absolute">
                            <div className="p-2  w-10 h-10 rounded-full items-center justify-center">
                                <MdJavascript size={70} color="white"/>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div>
                <main>
                    <Projects/>
                    
                </main>
                <footer></footer>
            </div>
        </div>
       
    )
};

export default Home;