import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NavMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
    <div className='pt-2 flex flex-row justify-between'>
      <a onClick={() => setShowMenu(prev => !prev)}>
        <img src='menu.png' alt='menu' className='h-[35px] w-[35px]  '></img>
      </a>
      <p className='font-bold'>跑數吧, peterjai</p>
    </div>


    <div className={`absolute top-0 left-0 w-full h-screen  ${showMenu?'':'-translate-x-full'} transition-all`} onClick={() => setShowMenu(false)}>

    </div>

    <div className={`absolute top-0 left-0 w-[300px] h-screen bg-gray-200 flex flex-col shadow-lg ${showMenu?'':'-translate-x-full'} transition-all`}>
      <img src="/sony_logo_blue_RGB.png" alt="SONY"/>
      <h1 className='text-center font-semibold'>Welcome to PMS</h1>
      <div className='flex flex-col justify-between  h-screen'>
        <div className='flex flex-col justify-start items-start gap-4 px-12 pt-12 text-gray-700'>
          <Link to={'/'} onClick={() => setShowMenu(false)} ><p className='font-bold text-lg'>Orders</p></Link>
          <Link to={'/product'} onClick={() => setShowMenu(false)} ><p className='font-bold text-lg'>Products</p></Link>
          <Link to={'/shop'} onClick={() => setShowMenu(false)} ><p className='font-bold text-lg'>Shops</p></Link>

        </div>

        <div className='flex flex-col justify-start items-start gap-4 px-12 pb-12'>
        <Link to={'/profile'} onClick={() => setShowMenu(false)} ><p className='font-bold text-lg'>Profile</p></Link>
        <Link to={'/login'} onClick={() => setShowMenu(false)} ><p className='font-bold text-lg'>Sign Out</p></Link>
        </div>
      </div>

    </div>
    </>

  )
}

export default NavMenu