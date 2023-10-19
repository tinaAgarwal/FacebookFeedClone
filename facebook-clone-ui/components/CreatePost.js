import { useSession } from 'next-auth/react';
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { HiOutlineVideoCamera  } from 'react-icons/hi';
import { IoMdPhotos } from "react-icons/io"
import { BsEmojiSmile } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { addPost } from '@/public/src/features/postSlice';
import axios from "axios";

const CreatePost = () => {

    const FACEBOOK_CLONE_ENDPOINT = "http://localhost:8080/api/v1/post";

    const { data :  session, status } =  useSession();
    const inputRef = useRef(null);
    const hiddenFileInput = useRef(null);
    const [imageToPost, setImageToPost] = useState(null);
    const dispatch = useDispatch();

    const handleClick = () => {
        hiddenFileInput.current.click();
    }

    // Add image to the post and display it
    const addImageToPost = (e) => {
        const reader = new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (e) => {
                setImageToPost(e.target.result)
            }
        }
    }

    // Remove image from post
    const removeImage = () => {
        setImageToPost(null);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!inputRef.current.value) return;
        const formData = new FormData();

        // Add data of post to form data
        formData.append("file", imageToPost);
        formData.append("post", inputRef.current.value);
        formData.append("name", session?.user.name);
        formData.append("email", session?.user.email);
        formData.append("profilePic", session?.user.image);
        console.log("post data " + formData)

        // send the data back to backend to save in database
        // Axios post returns a promise and we get response data , we will clear the image and text
        axios.post(FACEBOOK_CLONE_ENDPOINT , formData ,{
            headers :{
                Accept : "application/json"
            },
        })
        .then((response) => {
            inputRef.current.value = "";
            console.log(response.data)
            // before removing image send to parent to display
            dispatch(addPost(response.data));
            removeImage();
        })
        .catch((error) => {
            console.log(error);
        })
    }

  return (
    <div className='bg-white rounded-md shadow-md text-gray-500 p-2 divide-y'>
        <div className='flex p-4 space-x-2 items-center'>
            {/* User profile photo */}
            <Image
                src={session?.user.image}
                height = {40}
                width = {40}
                className='rounded-full cursor-pointer'
            />
            {/* Form to add any post heading */}
            <form className='flex flex-1'>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder={`What's on your mind, ${session?.user.name} ?`}
                    className='rounded-full h-12 flex-grow focus:outline-none font-medium bg-gray-100 px-4'
                ></input>
                <button
                    onClick={handleSubmit}
                    hidden >
                    Submit
                </button>
            </form>
        </div>
         {/* Display image which is posted and provide button to delete image or add any new */}
        {imageToPost && (
                <div 
                    onClick={removeImage}
                    className='flex items-center px-4 py-2 space-x-4 filter hover:brightness-110 transition duration-150 cursor-pointer'>
                    <img src={imageToPost}
                         className='h-10 object-contain'
                    ></img>
                    <RiDeleteBin6Line
                            className='h-8 hover:text-red-500'
                    />
                </div>
            )
        }

        <div className='flex justify-evenly py-2'>
            <div className='flex items-center p-1 space-x-1 flex-grow justify-center bg-gray-100 rounded-md hover:cursor-pointer'>
                {/* Camera icon  */}
                <HiOutlineVideoCamera 
                    size={20}
                    className="text-red-500"
                />
                <p className='font-semibold text-gray-600'>
                    Live Video
                </p>
            </div>

            <div
                onClick={handleClick}
                className='flex items-center p-1 space-x-1 flex-grow justify-center bg-gray-100 rounded-md hover:cursor-pointer'>
                {/* Photos icon  */}
                <IoMdPhotos
                    size={20}
                    className="text-green-500"
                />
                <p className='font-semibold text-gray-600'>
                    Photo/Video
                </p>
                <input type="file"
                       hidden
                       accept='image/*'
                       ref = {hiddenFileInput}
                       onChange={addImageToPost}
                />
            </div>

            <div className='flex items-center p-1 space-x-1 flex-grow justify-center bg-gray-100 rounded-md hover:cursor-pointer'>
                {/* Emoji icon  */}
                <BsEmojiSmile
                    size={20}
                    className="text-yellow-500"
                />
                <p className='font-semibold text-gray-600'>
                    Feeling/Activity
                </p>
            </div>
        </div>
    </div>
  )
}

export default CreatePost