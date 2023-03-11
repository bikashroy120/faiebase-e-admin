import React from 'react'

const Category = () => {

    const data = [
        {
            title:"Laptop",
            img:"https://static-01.daraz.com.bd/p/84d24f34887178b2256107483e7c415c.jpg_720x720.jpg_.webp"
        },
        {
            title:"Laptop",
            img:"https://static-01.daraz.com.bd/p/84d24f34887178b2256107483e7c415c.jpg_720x720.jpg_.webp"
        },
        {
            title:"Laptop",
            img:"https://static-01.daraz.com.bd/p/84d24f34887178b2256107483e7c415c.jpg_720x720.jpg_.webp"
        },
        {
            title:"Laptop",
            img:"https://static-01.daraz.com.bd/p/84d24f34887178b2256107483e7c415c.jpg_720x720.jpg_.webp"
        },
        {
            title:"Laptop",
            img:"https://static-01.daraz.com.bd/p/84d24f34887178b2256107483e7c415c.jpg_720x720.jpg_.webp"
        },
    ]


  return (
    <div className='dasbord_laout text-white'>
        <div className='flex items-center justify-between'>
            <h2 className='text-[25px] font-semibold'>Product Category</h2>
            <button className='py-3 px-5 text-[20px] font-medium rounded-lg bg-yellow-600 text-white'>Add Category</button>
        </div>

        <div className='w-full h-[500px] border border-gray-300 mt-10'>

        </div>
    </div>
  )
}

export default Category