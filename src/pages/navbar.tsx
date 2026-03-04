import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isopen, setIOpen] = useState(false);

  return (
    <div className="bg-[#0F0F0F] flex p-5 items-center justify-between md:px-90">
      <div className="flex text-2xl md:text-xl font-bold">
        <div className="text-[#7456FF]">PORT</div>
        <div className="text-white">FÒLIO</div>
      </div>
      <div className=" hidden md:flex items-center gap-10 text-xl text-white">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/projects"}>Projects</Link>
        <div className="text-[#7456FF] border-2 rounded-md border-[#7456FF] p-2">
          <Link to={"/contact"}>Contact Me</Link>
        </div>
      </div>
      <div className="md:hidden flex gap-2 transition-transform duration-300 ease-in-out flex-col z-50 " onClick={()=>setIOpen(!isopen)}>
          <div className={ isopen ? "bg-white w-10 h-1 rounded-md transform rotate-45 translate-0" : "bg-white w-10 h-1 rounded-md"}></div>
          <div className={ isopen ? "bg-white w-10 h-1 rounded-md transform opacity-0" : "bg-white w-10 h-1 rounded-md"}></div>
          <div className={ isopen ? "bg-white w-10 h-1 rounded-md transform -rotate-45 -translate-1" : "bg-white w-10 h-1 rounded-md"}></div>
      </div>
      
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-72 
        bg-[#7456FF] text-white flex flex-col gap-6 p-8
        transition-transform duration-300 ease-in-out
        ${isopen ? "translate-x-0" : "translate-x-full"}`}
      >
        <Link onClick={() => setIOpen(false)} to="/">Home</Link>
        <Link onClick={() => setIOpen(false)} to="/about">About</Link>
        <Link onClick={() => setIOpen(false)} to="/projects">Projects</Link>
        <Link onClick={() => setIOpen(false)} to="/contact">Contact Me</Link>
      </div>
    
    </div>
  )
};

export default Navbar;