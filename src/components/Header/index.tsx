import Image from 'next/image'

import logo from '../../assets/logo.png'

export default function Header() {
  return (
    <header className='w-full bg-slate-100 flex items-center justify-center'>
      <div className='container mx-auto'>
        <div className='w-full text-center'>
          <Image className='mx-auto mt-2' src={logo} width={100} height={100} alt={''} />
          <p className='m-6 lg:text-4xl md:text-2xl sm: text-lg font-semibold text-blue-900'>Multi step form</p>
        </div>
      </div>
    </header>
  )
}

