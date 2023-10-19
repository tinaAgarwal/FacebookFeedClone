import { signIn } from 'next-auth/react'
import React from 'react'
import Image from 'next/image'

const Login = () => {
  return (
    <div className='flex flex-col items-center mx-auto'>
        {/* Facebook Image */}
        <Image
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            height={240}
            width={240}
         />

        {/* SignIn from next auth will redirect to Facebook and redirect back to our home page */}
         <a
            onClick={signIn}
            className='px-20 py-4 z-10 text-2xl cursor-pointer -mt-16 bg-blue-500 rounded-md text-white'>
            Login
        </a>
    </div>
  )
}

export default Login