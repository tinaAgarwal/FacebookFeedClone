import Image from 'next/image'
import React from 'react'
import { HiOutlineHome, HiOutlineSearch } from 'react-icons/hi'
import { RiFlag2Line } from 'react-icons/ri';
import { MdOutlineOndemandVideo, MdOutlineExpandMore } from 'react-icons/md';
import { AiOutlineShop, AiFillMessage, AiFillBell } from 'react-icons/ai';
import { IoGameControllerOutline } from 'react-icons/io5';
import { CgMenuGridO } from 'react-icons/cg';
import { signOut, useSession } from 'next-auth/react';

const Header = () => {
  const { data :  session } =  useSession();
  return (
    <div className='bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16'>
        {/* Left */}
        <div className='flex min-w-fit'>
            {/* Logo */}
            <Image
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                height = {40}
                width = {40}
            />
            {/* Search bar */}
            <div className='flex items-center space=x-2 px-2 ml-2 rounded-full bg-gray-100 text-gray-500'>
                {/* Icon for search */}
                <HiOutlineSearch size={20} />
                {/* Search bar Hidden when mobile and visible on website */}
                <input
                className='hidden lg:inline-flex bg-transparent focus:outline-none'
                type="text"
                placeholder='Search Facebook'
                />
            </div>
        </div>
        {/* Center */}
        <div className='flex flex-grow justify-center mx-2'>
            <div className='flex items-center'>

                {/* Home Icon */}
                <div className='flex items-center h14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
                    <HiOutlineHome                className='mx-auto'
                        size={25} />
                </div>

                {/* Flag Icon */}
                <div className='flex items-center h14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
                    <RiFlag2Line                className='mx-auto'
                        size={25} />
                </div>

                {/* Video Icon */}
                <div className='flex items-center h14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
                    <MdOutlineOndemandVideo                className='mx-auto'
                        size={25} />
                </div>

                {/* Shopping Icon */}
                <div className='flex items-center h14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
                    <AiOutlineShop               className='mx-auto'
                        size={25} />
                </div>

                {/* Game Icon */}
                <div className='flex items-center h14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
                    <IoGameControllerOutline            className='mx-auto'
                        size={25} />
                </div>
            </div>
        </div>

        {/* Right */}
        <div className='flex items-center justify-end min-w-fit space-x-2'>
            {/* User profile photo */}
            <Image
                src={session?.user.image}
                height = {40}
                width = {40}
                className='rounded-full cursor-pointer'
                onClick={signOut}
            />

            {/*User Name */}
            <p className='hidden xl:inline-flex font-semibold text-sm whitespace-nowrap p-3 max-w-xs '>
                {session?.user.name.split(" ")[0]}
            </p>

            {/* Grid Menu */}
            <CgMenuGridO
               size={20}
                className='hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300' />

            {/* Messages icon */}
            <AiFillMessage
               size={20}
                className='hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300' />

            {/* Bell icon */}
            <AiFillBell
               size={20}
                className='hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300' />

            {/* Expand more icon */}
            <MdOutlineExpandMore
               size={20}
                className='hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300' />

        </div>

    </div>
  )
}

export default Header