import Image from 'next/image'

import logo from '../../assets/logo.png'

export default function Header() {
  return (
    <header className='bg-slate-100  py-6 w-full'>
      <div className='flex max-w-2xl mx-auto flex-col lg:justify-between sm:flex-row items-center justify-center gap-6'>
        <Image className='w-20 h-[90px]' src={logo} alt='logo' />
        <span className='text-2xl  font-semibold text-blue-900'>
          Multi step form
        </span>
      </div>
    </header>
  )
}
