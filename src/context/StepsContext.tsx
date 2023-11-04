"use client"
import { IStepsContext } from '@/types/types'

import { createContext, useState } from 'react'

export const StepsContext = createContext<IStepsContext | null>(null)

export const StepsProvider = ({ children }: { children: React.ReactNode }) => {
  const [previousStep, setPreviousStep] = useState<number>(0)
  const [currentStep, setCurrentStep] = useState<number>(1)


  const moveToNextStep = () => {
    setPreviousStep(currentStep);
    setCurrentStep(currentStep + 1);
  };

  const moveToPreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const contextValue: IStepsContext = {
    previousStep,
    currentStep,
    moveToNextStep,
    moveToPreviousStep,
  };

  return (
    <StepsContext.Provider value={contextValue}>
      {children}
    </StepsContext.Provider>
  )
}


