import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {BsArrowLeft} from "react-icons/bs"
import {BiCloudUpload} from "react-icons/bi"
import { useDispatch, useSelector } from 'react-redux'
import {uploadImage} from "../store/ImageUpload/image-action"
import {MdDelete} from "react-icons/md"


const AddCategory = () => {
    const {imageUrl} = useSelector((state)=>state.img)
    const dispatch = useDispatch();
    const [file, setFile] = useState("");
    console.log(imageUrl)

    const handelChance = (e)=>{
      const upImg = e.target.files[0];
      // console.log(upImg)
      dispatch(uploadImage(upImg))
    }

  return (
    <div className='dasbord_laout' >
        <div className=''>
            <Link className='py-3 px-5 text-[20px] font-medium rounded-lg bg-yellow-600 text-white flex items-center gap-2 w-40 justify-center' to={"/category"}> <BsArrowLeft/> <span>Back</span></Link>
        </div>

        <div className=' max-w-[500px] m-auto flex items-center gap-5 justify-center flex-col'>
            
            <div className=' group w-[200px] relative h-[200px] flex justify-center rounded-full overflow-hidden'>
            <img
              src={
                imageUrl
                  ? imageUrl
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
              className='w-full h-full object-cover'
            />
              {
                imageUrl && <button className=' absolute top-0 bottom-0  items-center hidden group-hover:flex justify-center w-[100%] h-[100%] bg-black z-30 bg-opacity-70 duration-300'><MdDelete className='text-[40px] text-red-500'/></button>
              }
            </div>
            <div className='w-full'>
              <div className='mb-5 text-center flex items-center justify-center'>
                <label htmlFor='for' className='text-[25px] text-center flex items-center gap-3 cursor-pointer '>
                    Select Image <BiCloudUpload/>
                </label>
                <input type="file" name="" id="for" style={{display:"none"}} onChange={(e) => handelChance(e)} />
              </div>
              <input placeholder='Enter Title' type="text" className='w-full py-3 text-white text-[20px] font-medium px-3 border border-gray-500 rounded-xl bg-transparent' />
              <div className='flex items-center justify-center'>
              <button className='mt-5 p-3 px-8 rounded-xl text-[20px] text-center bg-green-600 text-white'>Save</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default AddCategory