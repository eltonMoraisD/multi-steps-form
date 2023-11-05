import Image from 'next/image'

import logo from '../../assets/logo.png'

export default function Header() {
  return (
    <header className='w-full xm:h-40 bg-slate-100 flex items-center justify-center'>
      <div className='container justify-center  items-center mx-auto'>
        <div className='w-full text-center '>
          <div className=' lg:flex text-center p-10 lg:items-center lg:justify-center lg:text-center sm:flex sm:items-center sm:justify-between sm:text-center'>
            <Image className='mt-2 xm:mt-10  xm:w-[80px] xm:h-[90px] ' src={logo} alt='logo' />
            <p className='m-6  xm:mb-10 lg:text-4xl lg:mt-16 md:mt-16 md:text-2xl sm:mt-14 sm:text-lg font-semibold text-blue-900'>
              Multi step form
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

