import React,{useState} from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleNav=()=>{
        setNav(!nav)
    }

  return (
    <div className='max-w-[1400px] h-screen bg-cyan-950'>
        <div className='flex justify-between p-4 items-center'>
            <div className='cursor-pointer md:hidden' onClick={handleNav} >
                {nav?<AiOutlineClose  className='font-bold text-white z-10' size={30}/>: <AiOutlineMenu  className='font-bold text-white' size={30}/>}
               
                
            </div>
            
            <div className={nav ? ' fixed top-0 right-0 text-2xl bg-cyan-800 border-r border-gray-600 h-full w-[60%] md:w-[20%] px-4  pt-24 text-white':'fixed hidden right-[-100]'}>
               
                <ul className='p-4'>
                    <li className='p-4'>Home</li> 
                    <li className='p-4'>About</li>
                    <li className='p-4'>Book</li>
                    <li className='p-4'>Parcel</li>
                    <li className='p-4'>Contact</li>

                </ul>
            </div>
            
            <h3 className='text-4xl md:text-4xl font-bold text-amber-400'>MATATU APP</h3>
            <div >
                <ul className='hidden md:flex gap-6 text-2xl text-white'>
                    <li>Home</li> 
                    <li>About</li>
                    <li>Book</li>
                    <li>Parcel</li>
                    <li>Contact</li>

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar