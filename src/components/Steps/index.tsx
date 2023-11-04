import "./style.css"
import { useContext } from 'react'

import { StepsContext } from '@/context/StepsContext'
import { IFormContext, IStepsContext } from '@/types/types'
import { FormContext } from '@/context/FormContext'

export const steps = ["step 1", "step 2", "step 3", "step 4", "step 5"]

export default function Steps() {
  const formContex = useContext(FormContext)
  const stepContext = useContext(StepsContext)

  const { currentStep } = stepContext as IStepsContext
  const { isLoading } = formContex as IFormContext

  return (
    <>
      <div className='flex  justify-center mt-8 mb-6'>
        <div className='flex  items-center'>
          {steps.map((_, i) => (
            <div key={i} className={`custom-step mx-2 ${currentStep === i + 1 && !isLoading && "active"} `}>
              <div className='step'>{i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
