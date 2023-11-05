import { useFormContext } from '@/context/FormContext'

export default function TableUser() {
  const { userApi } = useFormContext()
  const users = [userApi]
  const userEntries = Object.entries(users[0]).slice(0, -2);

  return (
    <>
      <div className="max-w-md mx-auto overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-semibold leading-6 text-blue-900">User</h3>
        </div>
        <div className="border-t border-gray-200">
          <ul className="divide-y divide-gray-200">
            {userEntries.map(([key, value]) => (
              <li key={key} className="pl-3 pr-4 py-3 flex items-center justify-between text-sm font-medium">
                <div className="flex items-center">
                  <span className="ml-2 text-gray-500">{key}</span>
                </div>
                <span className='text-blue-900'>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
