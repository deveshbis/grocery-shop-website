"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);
    const session = useSession();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleProfileMenu = () => setProfileMenuOpen(!profileMenuOpen);

    return (
        <nav
            className={`fixed w-full py-4 transition-all duration-500 ${scrolled ? "bg-white shadow-md" : "bg-transparent"
                } z-20`}
        >
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <div
                    className={`text-2xl font-semibold ${scrolled ? "text-gray-800" : "text-black"
                        }`}
                >
                    <Link href="/" className="flex items-center gap-2">
                        {/* <span className="text-black border-y-2 rounded-t-full" /> */}
                        <Image src={"/assets/home/logo.png"} width={40} height={200} alt="" />
                        <Image src={"/assets/home/Fresh Harvests.png"} width={300} height={200} alt="" />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div
                    className={`hidden lg:flex items-center space-x-8 ${scrolled ? "text-gray-800" : "text-black"
                        }`}
                >
                    <Link href="/" className="text-xl hover:text-sky-500 transition">
                        Home
                    </Link>
                    <Link href="/destinations" className="text-xl hover:text-sky-500 transition">
                        Shop
                    </Link>
                    <Link href="/resorts" className="text-xl hover:text-sky-500 transition">
                        About Us
                    </Link>
                    <Link href="/about" className="text-xl hover:text-sky-500 transition">
                        Blog
                    </Link>
                </div>

                <div className='flex items-center sm:space-x-8 space-x-6'>
                    <div className="flex flex-col items-center justify-center gap-0.5 cursor-pointer">
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer fill-[#333] inline w-5 h-5"
                                viewBox="0 0 64 64">
                                <path
                                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                    data-original="#000000" />
                            </svg>
                            <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
                        </div>
                        <span className="text-[13px] font-semibold text-[#333]">Wishlist</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-0.5 cursor-pointer">
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="cursor-pointer fill-[#333] inline"
                                viewBox="0 0 512 512">
                                <path
                                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                                    data-original="#000000"></path>
                            </svg>
                            <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
                        </div>
                        <span className="text-[13px] font-semibold text-[#333]">Cart</span>
                    </div>
                    {
                        !session.data ?
                            <Link href={"/login"}>
                                <button
                                    className='max-lg:hidden px-4 py-2 text-sm rounded-full text-white border-2 bg-[#FF6A1A] '>Sign
                                    In</button>
                            </Link> :
                            <button className='max-lg:hidden px-4 py-2 text-sm rounded-full text-white border-2  bg-[#FF6A1A] ' onClick={()=> signOut()}>Logout</button>
                    }

                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-white text-2xl focus:outline-none"
                    onClick={toggleMenu}
                >
                    {menuOpen ? (
                        <FaTimes className={`${scrolled ? "text-gray-800" : "text-white"}`} />
                    ) : (
                        <FaBars className="text-sky-500" />
                    )}
                </button>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden absolute top-16 right-0 w-3/4 bg-white p-6 rounded-l-md shadow-md transition-transform transform ${menuOpen ? "translate-x-0" : "translate-x-full"
                        } duration-500`}
                >
                    <Link href="/" className="block py-2 text-gray-800 hover:text-sky-500">
                        Home
                    </Link>
                    <Link href="/destinations" className="block py-2 text-gray-800 hover:text-sky-500">
                        Shop
                    </Link>
                    <Link href="/resorts" className="block py-2 text-gray-800 hover:text-sky-500">
                        About Us
                    </Link>
                    <Link href="/about" className="block py-2 text-gray-800 hover:text-sky-500">
                        Blog
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
