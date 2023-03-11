import React from 'react'
import DataTable, { createTheme } from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';

const Category = () => {

    const navigate =  useNavigate()

    const data = [
        {
            title:"Laptop",
            img:"https://static-01.daraz.com.bd/p/84d24f34887178b2256107483e7c415c.jpg_720x720.jpg_.webp",
            dec:"lorem Product Category Product Category Product Category"
        },
        {
            title:"Laptop",
            img:"https://static-01.daraz.com.bd/p/84d24f34887178b2256107483e7c415c.jpg_720x720.jpg_.webp",
            dec:"lorem Product Category Product Category Product Category"
        },
        {
            title:"Laptop",
            img:"https://static-01.daraz.com.bd/p/84d24f34887178b2256107483e7c415c.jpg_720x720.jpg_.webp",
            dec:"lorem Product Category Product Category Product Category"
        },
        {
            title:"Laptop",
            img:"https://static-01.daraz.com.bd/p/84d24f34887178b2256107483e7c415c.jpg_720x720.jpg_.webp",
            dec:"lorem Product Category Product Category Product Category"
        },
        {
            title:"Laptop",
            img:"https://static-01.daraz.com.bd/p/84d24f34887178b2256107483e7c415c.jpg_720x720.jpg_.webp",
            dec:"lorem Product Category Product Category Product Category"
        },
    ]
    
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Img',
            selector: row => <img src={row.img} className={"w-[50px] h-[50px]"}/>,
        },
        {
            name:"Dece",
            selector: row => row.dec,
        },
        {
            name:"Action",
            cell:(row)=><button className='bg-green-400 text-white py-1 px-2'>Edit</button>, 
        }
    ];

    createTheme('solarized', {
        text: {
          primary: '#fff',
          secondary: 'gray',
        },
        background: {
          default: 'transparent',
        },
        context: {
          background: '#cb4b16',
          text: '#FFFFFF',
        },
        divider: {
          default: 'gray',
        },
        action: {
          button: 'rgba(0,0,0,.54)',
          hover: 'rgba(0,0,0,.08)',
          disabled: 'rgba(0,0,0,.12)',
        },
      }, 'dark');

      const customStyles = {
        rows: {
            style: {
                minHeight: '72px', // override the row height
            },
        },
        headCells: {
            style: {
                paddingLeft: '20px', // override the cell padding for head cells
                paddingRight: '20px',
                background:"",
                fontSize:"20px"
            },
        },
        cells: {
            style: {
                paddingLeft: '20px', // override the cell padding for data cells
                paddingRight: '20px',
                fontSize:"17px"
            },
        },
    };

    // add-category
  return (
    <div className='dasbord_laout text-white'>
        <div className='flex items-center justify-between'>
            <h2 className='text-[25px] font-semibold'>Product Category</h2>
            <button onClick={()=>navigate("/add-category")} className='py-3 px-5 text-[20px] font-medium rounded-lg bg-yellow-600 text-white'>Add Category</button>
        </div>

        <div className='w-full h-auto border border-gray-300 mt-10'>
        <DataTable
            columns={columns}
            data={data}
            theme="solarized"
            customStyles={customStyles}
            pagination
            highlightOnHover
        />
        </div>
    </div>
  )
}

export default Category