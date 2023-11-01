import Image from 'next/image'
import React from 'react'
import logo from '../../assets/logo.png'


export default function Header() {
  return (
    <header className='w-full bg-slate-100 flex items-center justify-center'>
      <div className='container mx-auto'>
        <div className='w-full text-center'>
          <Image className='w-22 h-22  mx-auto mt-2' src={logo} width={0} height={0} alt={''} />
          <p className='m-6 lg:text-4xl md:text-2xl sm: text-lg font-semibold'>Multi step form</p>
        </div>
      </div>
    </header>
  )
}
