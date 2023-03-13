import React, { useEffect, useState } from 'react'
import DataTable, { createTheme } from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import Loder from '../components/loder/Loder';
import { getCategory } from '../FairbaseServices';

const Category = () => {

    const navigate =  useNavigate()

    const [category,setCategory] = useState(null)

    useEffect(()=>{
        const getData = async()=>{
            await getCategory().then((data)=>{
                setCategory(data)
             })
        }
        getData()
    },[])

 
    
    const columns = [
        {
            name: 'Img',
            selector: row => <img src={row.imgUrl} className={"w-[50px] h-[50px]"}/>,
        
        },
        {
            name:"Id",
            selector: row => row.id,
        },
        {
            name: 'Title',
            selector: row => row.title,
        },


        {
            name:"Action",
            cell:(row)=><button className='bg-red-400 text-white py-1 px-2'>Delete</button>, 
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
                {
                    !category ? (<div className='flex items-center justify-center p-5'>
                        <div className="lds-dual-ring"></div>
                    </div>) : (
                        <DataTable
                        columns={columns}
                        data={category}
                        theme="solarized"
                        customStyles={customStyles}
                        pagination
                        highlightOnHover
                    />
                    )
                }
        </div>
    </div>
  )
}

export default Category