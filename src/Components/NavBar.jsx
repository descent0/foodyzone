import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="flex flex-row justify-between sm:flex-row sm:p-5 p-2 items-center h-[80px] sm:h-[50px] w-screen bg-[#295f48] gap-2 sm:justify-between sm:items-center sm:pr-9">
           <Link to="/">
            <div className="text-white text-xl font-bold">
                <img src="/src/assets/images/94002756560.png" className="w-20" alt="" />
                
            </div>
            </Link>
            
            <div className="hidden md:flex space-x-4">
                <Link to="/home">
                <a className="text-white hover:text-gray-200">Home</a>
                </Link>
                <Link to="/about">
                <a className="text-white hover:text-gray-200">About</a>
                </Link>
                <Link to="/home">
                <a className="text-white hover:text-gray-200">Services</a>
                </Link>
                <Link to="/home">
                <a className="text-white hover:text-gray-200">Contact</a>
                </Link>
            </div>
            <div className="md:hidden">
                <button className="text-white focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}
