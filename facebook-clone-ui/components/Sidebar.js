import React from 'react'
import Image from 'next/image'
import { ImUsers } from 'react-icons/im'
import SidebarItem from './SidebarItem'
import { MdGroups , MdOutlineOndemandVideo , MdOutlineExpandMore } from 'react-icons/md'
import { AiOutlineShop } from 'react-icons/ai'
import { BsStopwatch } from 'react-icons/bs'
import { useSession } from 'next-auth/react'

const Sidebar = () => {
  const { data: session} = useSession();
  return (
    <div className='hidden lg:inline-flex flex-col py-2 max-w-xl lg:min-w-[320px]'>
        <div className='flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer'>

            {/*User Image */}
            <Image
                src={session?.user.image}
                height = {40}
                width = {40}
                className='rounded-full cursor-pointer'
            />
            {/*User Name */}
            <p className='hidden sm:inline-flex font-medium'>
            {session?.user.name}
            </p>
        </div>
        {/* SideBar items*/}

        {/* Users Icon */}
        <SidebarItem Icon={ImUsers} value="Friends" />

        {/* Groups Icon */}
        <SidebarItem Icon={MdGroups} value="Groups" />

        {/* MarketPlace Icon */}
        <SidebarItem Icon={AiOutlineShop} value="Marketplace" />

        {/* Video Icon */}
        <SidebarItem Icon={MdOutlineOndemandVideo} value="Watch" />

        {/* Memories Icon */}
        <SidebarItem Icon={BsStopwatch} value="Memories" />

        {/* Expand more icon */}
        <SidebarItem Icon={MdOutlineExpandMore} value="See More" />

    </div>
  )
}

export default Sidebar