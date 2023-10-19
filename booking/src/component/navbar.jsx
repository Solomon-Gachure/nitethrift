import React,{useState} from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleNav=()=>{
        setNav(!nav)
    }

  return (
    <div className='max-w-[1400px] h-screen bg-cyan-950'>
        <div className='flex w-full px-2 pt-2 justify-between  items-center'>
            <div className='' onClick={handleNav}>
                {nav?<AiOutlineClose size={30} className=' font-bold text-white cursor-pointer  '/>:<AiOutlineMenu size={30} className=' font-bold text-white cursor-pointer '/>}
                
            </div>
            <div>
                <h3 className='text-2xl md:text-3xl font-bold text-orange-500'>Murang'a Shuttle</h3>
            </div>
            <div >
                <ul className='hidden text-white md:flex gap-4'>
                    <li className='md:text-2xl cursor-pointer'>Home</li>
                    <li className='md:text-2xl cursor-pointer'>About</li>
                    <li className='md:text-2xl cursor-pointer'>Book</li>
                    <li className='md:text-2xl cursor-pointer'>Parcel</li>
                    <li className='md:text-2xl cursor-pointer'>Contact</li>

                    </ul>
            </div>
            
        </div>
        
        <div className={!nav ? 'hidden top-0 left-0 ease-in-out duration-500 bg-black h-screen w-[50px]':'left-[-100%]'}>
                
                <ul className=' text-white font-bold text-2xl bg-black w-[300px] h-screen top-0 left-0 flex flex-col px-2'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Book</li>
                    <li>Parcel</li>
                    <li>Contact</li>

                </ul>
            </div>
    </div>
  )
}

export default Navbar