"use client"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { userSchema } from './schemaValidations'
import { IUser } from '@/types/types'
import { useStepsContext } from '@/context/StepsContext'

import Input from '../Input'
import Button from '../Button'
import ComboBox from '../Combobox'
import { useFormContext } from '@/context/FormContext'

import { steps } from '../Steps'
import TravelReasons from "../TravelReasons"
import SecondStage from "../SecondStage"
import ThirdStage from "../ThirdStage"

const getFieldNamesForStep = (stepNumber: number): (keyof IUser)[] => {
  switch (stepNumber) {
    case 2:
      return ["firstName", "lastName", "email"];
    case 3:
      return ["address", "city", "postcode", "phone", "country"];
    default:
      return [];
  }
};

const Form: React.FC<{ users: IUser }> = ({ users }) => {

  const { currentStep, moveToNextStep, moveToPreviousStep } = useStepsContext()
  const { handleInputChange } = useFormContext()

  const {
    register,
    trigger,
    handleSubmit,
    clearErrors, reset,
    formState: { errors } } = useForm<IUser>({
      resolver: zodResolver(userSchema),
      defaultValues: users,
    })

  const submitValues: SubmitHandler<IUser> = (data) => {
    console.log("Submit", data);
  }

  const prev = () => {
    if (currentStep > 1) {
      moveToPreviousStep()
      reset(users)
    }

  }
  const next = async () => {
    const fields = getFieldNamesForStep(currentStep)
    const output = await trigger(fields, { shouldFocus: true });

    if (!output) {
      return
    }
    if (currentStep < steps.length - 1) {
      moveToNextStep();
    }
  }

  const StepsField = (step: number) => {
    switch (step) {
      case 2:
        return (
          <SecondStage
            errors={errors}
            clearErrors={clearErrors}
            users={users}
            register={register}
          />

        );
      case 3:
        return (
          <ThirdStage
            errors={errors}
            clearErrors={clearErrors}
            users={users}
            register={register}
          />
        )
      case 4:
        return (
          <>
            <TravelReasons />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit(submitValues)} className='m-1 p-10 xm:p-0 w-full mx-auto'>

      {StepsField(currentStep)}

      <div className='mt-8 pt-5'>
        <div className='flex justify-between'>

          {/*Prev Button */}
          <Button onClick={prev} type="button">
            <BsArrowLeft />
          </Button>

          {/*Next Button */}
          <Button
            onClick={next}
            type={currentStep > steps.length - 1 ? "submit" : "button"}
          >
            {currentStep === steps.length - 1 ? "Submit" : <BsArrowRight />}
          </Button>
        </div>
      </div>
    </form >

  )
}

export default Form