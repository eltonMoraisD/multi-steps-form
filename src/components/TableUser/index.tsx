import { IUser } from '@/types/types';
import { motion } from 'framer-motion';

export default function TableUser({ users }: { users: IUser }) {
  const data = [users]
  const userEntries = Object.entries(data[0]).slice(0, -2);

  const initialAnimation = { scale: 0, opacity: 0 };
  const scaleIn = { scale: 1, opacity: 1 };
  const scaleOut = { scale: 0, opacity: 0 };
  const transition = { duration: 0.6, ease: 'easeInOut' };
  const staggerDuration = 0.1;

  return (
    <motion.div
      initial={initialAnimation}
      animate={scaleIn}
      exit={scaleOut}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className="max-w-md mx-auto overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-semibold leading-6 text-blue-900">User</h3>
        </div>
        <div className="border-t border-gray-200">
          <ul className="divide-y divide-gray-200">
            {userEntries.map(([key, value], index) => (
              <motion.li
                initial={initialAnimation}
                animate={scaleIn}
                exit={scaleOut}
                transition={{ delay: index * staggerDuration, ...transition }}
                key={key} className="pl-3 transition duration-300 ease-in-out  hover:bg-gray-100 pr-4 py-3 flex items-center justify-between text-sm font-medium">
                <div className="flex items-center">
                  <span className="ml-2 text-gray-500">{key}</span>
                </div>
                <span className='text-blue-900'>{value}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
