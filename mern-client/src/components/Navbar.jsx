import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
//react icons
import { FaBlog, FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { AuthContext } from '../contects/AuthProvider';
// import { RiBookOpenFill } from "react-icons/ri";

const Navbar = () => {
    const[isMenuOpen, setIsMenuOpen] = useState(false);
    const[isSticky, setIsSticky] = useState(false);
    const {user} = useContext(AuthContext);

    //toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100){
                setIsSticky(true);
            } else{
                setIsSticky(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll);
        }
    },[])

    //naviItems here
    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Shop", path: "/shop" },
        { link: "Controls", path: "/admin/dashboard" },
        { link: "Blog", path: "/blog" },
    ]
  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300 items-center text-base gap-8'>
        <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-gray-700 " : "" }`}>
            <div className='flex justify-between'>
                <Link to="/" className='text-2xl font-bold text-pink-600 flex items-center gap-2'><FaBlog className='inline-block'/>InkInFlux</Link>

                {/*nav items for large devices*/}

                <ul className='md:flex space-x-12   hidden'>
                    {
                        navItems.map(({link, path})=> <Link key={path} to={path} className={`block font-semibold text-2xl text-black cursor-pointer hover:text-pink-400 ${isSticky ? "sticky top-0 left-0 right-0 text-white" : "" }`}>{link}</Link>)
                    }
                </ul>

                {/* btn for lg devices */}
                <div className='space-x-12 hidden lg:flex items-center'>
                    <button><FaBarsStaggered className='w-5 hover:text-pink-600'/></button>
                </div>

                {/* menu btn for mobile devices */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-black focus:outline-none'>
                        {
                            isMenuOpen ? <FaXmark className='h-5 w-5 text-black'/> : <FaBarsStaggered className='h-5 w-5 text-pink-600'/>
                        }
                    </button>
                </div>
            </div>

            {/* nav items for sm devices */}
            <div className={`space-y-4 px-4 mt-16 py-7 bg-gray-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
            {
                navItems.map(({link, path})=> <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer'>{link}</Link>)
            }
            </div>
        </nav>
    </header>
  )
}

export default Navbar
