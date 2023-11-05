export default function Wrapper({ children }: {
  children: React.ReactNode,
}) {
  return (
    <div className='container flex justify-center  bg-slate-50  max-w-2xl  mx-auto p-5 mt-6 border-2 border-gray-300'>
      {children}
    </div>
  )
}
