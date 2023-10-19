import React from 'react'
import { RiVideoAddFill } from 'react-icons/ri'
import { BiSearch } from 'react-icons/bi'
import { CgMoreAlt } from 'react-icons/cg'
import Contacts from './Contacts'

const RightSidebar = () => {
  return (
    <div className='hidden md:inline-flex
    flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]'>
        <div className='flex items-center text-gray-500'>
            <p className='flex text-lg font-semibold flex-grow'>
                Contacts
            </p>
            <div className='flex space-x-1 px-2 '>
                {/* Video icon */}
                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <RiVideoAddFill />
                </div>

                {/* Search icon */}
                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <BiSearch />
                </div>

                {/* More icon */}
                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <CgMoreAlt />
                </div>

            </div>
        </div>

        {/* Get all the contacts */}
        <Contacts 
        name="Noopur Agarwal" 
        src="https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
        status="online"
        />

        <Contacts 
        name="Test test" 
        src="https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        status="offline" 
        />

        <Contacts 
        name="Foo bar" 
        src="https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        status="online"
         />
    </div>
  )
}

export default RightSidebar