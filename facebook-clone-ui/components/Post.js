import Image from 'next/image'
import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'
import { FaRegCommentAlt } from 'react-icons/fa'
import { RiShareForwardLine } from 'react-icons/ri'

const Post = ({ post }) => {
    console.log(post);
    console.log("Here in Post.js")
  return (
    <div className='flex flex-col' key={post.id}>
        <div className='bg-white mt-6 rounded-md p-3'>
            <div className='flex items-center space-x-2'>
                {/* User Image */}
                <img
                    className='rounded-full w-10 h-10'
                    src={post.profilePic}>
                </img>
                {/* User Details */}
                <div>
                    <p className='font-medium'>
                        {post.name}
                    </p>
                    <p className='text-xs test-gray-500'>
                        {post.timeStamp}
                    </p>
                </div>
            </div>
            {/* Post text */}
            <p className='py-4'>
                {post.post}
            </p>
            {/* IF any image */}
            {post.image != null && (
                <div className='relative h-60 md:h-96 bg-white'>
                    <Image
                        src={post.image}
                        layout='fill'
                        objectFit='cover'
                    />
                </div>
            )}

            {/* Footer of post */}
            <div className='flex items-center justify-center bg-white p-2'>

                {/* Like Icon */}
                <div className='flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer'>
                    <FiThumbsUp
                        className='h-4'
                    />
                    <p className='text-xs sm:text-base'>
                        Like
                    </p>
                </div>

                {/* Comment Icon */}
                <div className='flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer'>
                    <FaRegCommentAlt
                        className='h-4'
                    />
                    <p className='text-xs sm:text-base'>
                        Comment
                    </p>
                </div>

                {/* Share Icon */}
                <div className='flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer'>
                    <RiShareForwardLine
                        className='h-4'
                    />
                    <p className='text-xs sm:text-base'>
                        Share
                    </p>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Post