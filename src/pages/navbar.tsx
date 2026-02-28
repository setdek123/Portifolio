import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex gap-20  bg-gradient-to-r from-[#000] via-[#311278] to-blue-500 items-center justify-around  py-5 text-white " >
            <div className="mt-10">
                <h1 className="text-4xl font-extrabold ">PORTIFÒLIO!</h1>
            </div>
            <div className="flex gap-10 text-xl mt-10 text-gray-400">
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/contacts"}>Contacts</Link>
            </div>
            <div className="text-xl text-gray-400 mt-10 bg-amber-400 -ml-100 flex items-center">
                <Link to={"/projects"}>Projects</Link>
            </div>
        </div>
    )
}

export default Navbar;