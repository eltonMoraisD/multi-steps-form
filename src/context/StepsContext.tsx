"use client"
import { IStepsContext } from '@/types/types'

import { createContext, useContext, useState } from 'react'

const StepsContext = createContext<IStepsContext | null>(null)

const useStepsContext = () => {
  const context = useContext(StepsContext)

  if (!context) {
    throw new Error('useStepsContext must be used within a FormProvider');
  }

  return context
}

const StepsProvider = ({ children }: { children: React.ReactNode }) => {
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


export { StepsProvider, useStepsContext, StepsContext }