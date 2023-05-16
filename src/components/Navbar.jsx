import { NavLink } from 'react-router-dom';
import logo from '../assets/logos/Group 1329.png'
// import { HiBars3BottomLeft } from "react-icons/hi2";
// import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import { motion } from "framer-motion"
import { Sling as Hamburger } from 'hamburger-react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
    }


    return (
        <div>
            <div className="max-w-[1240px] relative  mx-auto flex justify-between items-center my-5">
                <img className='w-52 pl-3' src={logo} alt="" />
                <ul className='hidden md:flex items-center gap-5'>
                    <li>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'text-primary' : 'default'}> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/donation' className={({ isActive }) => isActive ? 'text-primary' : 'default'}> Donation</NavLink>
                    </li>
                    <li>
                        <NavLink to='/events' className={({ isActive }) => isActive ? 'text-primary' : 'default'}> Events</NavLink>
                    </li>
                    <li>
                        <NavLink to='/blog' className={({ isActive }) => isActive ? 'text-primary' : 'default'}> Blog</NavLink>
                    </li>

                </ul>

                {/* hamburger 
                 */}

                <Hamburger className='md:hidden text-xl border  mr-5' toggled={menuOpen} toggle={setMenuOpen} />
                {/* <span onClick={() => setMenuOpen(!menuOpen)} className='md:hidden text-xl border p-1 mr-3'><HiBars3BottomLeft></HiBars3BottomLeft></span> */}


                {/* mobile menu  */}

                <motion.ul
                    animate={menuOpen ? "open" : "closed"}
                    variants={variants}
                    transition={{ duration: .3, type: 'spring', bounce: .2 }}


                    className={` pt-4 md:hidden absolute top-16 bg-black space-y-3 bg-opacity-50 w-full text-white h-screen `}>
                    <motion.li
                        whileHover={{ x: 20 }}
                        className='pl-3'>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'text-primary' : 'default'}> Home</NavLink>
                    </motion.li>
                    <motion.li
                        whileHover={{ x: 20 }}
                        className='pl-3'>
                        <NavLink to='/donation' className={({ isActive }) => isActive ? 'text-primary' : 'default'}> Donation</NavLink>
                    </motion.li>
                    <motion.li
                        whileHover={{ x: 20 }}
                        className='pl-3'>
                        <NavLink to='/events' className={({ isActive }) => isActive ? 'text-primary' : 'default'}> Events</NavLink>
                    </motion.li>
                    <motion.li
                        whileHover={{ x: 20 }}
                        className='pl-3'>
                        <NavLink to='/blog' className={({ isActive }) => isActive ? 'text-primary' : 'default'}> Blog</NavLink>
                    </motion.li>

                </motion.ul>
            </div>
        </div>
    );
};

export default Navbar;