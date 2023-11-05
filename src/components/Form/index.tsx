// "use client"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import toast, { Toaster } from 'react-hot-toast';

import { userSchema } from './schemaValidations'
import { IUser } from '@/types/types'
import { useStepsContext } from '@/context/StepsContext'
import { useFormContext } from "@/context/FormContext";

import Button from '../Button'
import { steps } from '../Steps'
import TravelReasons from "../TravelReasons"
import SecondStage from "../SecondStage"
import ThirdStage from "../ThirdStage"
import TableUser from "../TableUser"

const getFieldNamesForStep = (stepNumber: number): (keyof IUser)[] => {
  switch (stepNumber) {
    case 2:
      return ["firstName", "lastName", "email"];
    case 3:
      return ["address", "city", "postcode", "phone", "country"];
    case 4:
      return ["accountType", "termsAccepted"];
    default:
      return [];
  }
};

const Form: React.FC<{ users: IUser }> = ({ users }) => {

  const { currentStep, moveToNextStep, moveToPreviousStep } = useStepsContext()
  const { userApi } = useFormContext()
  const {
    register,
    trigger,
    handleSubmit,
    clearErrors, reset,
    formState: { errors }
  } = useForm<IUser>({
    resolver: zodResolver(userSchema),
    defaultValues: users,
  })


  const submitValues: SubmitHandler<IUser> = (data) => {
    toast.success('successful form submission.');
    moveToNextStep()
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
    const valid = await trigger(fields, { shouldFocus: true });

    if (!valid) {
      return
    }

    if (currentStep < steps.length - 1) {
      moveToNextStep();
      if (currentStep === steps.length - 1) {
        await handleSubmit(submitValues)()
        moveToNextStep();
      }
    }

  }

  const stepsFields = [
    <SecondStage
      key="second"
      errors={errors}
      clearErrors={clearErrors}
      users={users}
      register={register}
    />,
    <ThirdStage
      key="third"
      errors={errors}
      clearErrors={clearErrors}
      users={users}
      register={register}
    />,
    <TravelReasons
      key="travelReasons"
      errors={errors}
      clearErrors={clearErrors}
      users={users}
      register={register}
    />,
    <TableUser key="tableUsers" users={userApi} />
  ];

  return (
    <>
      <Toaster position="bottom-center" toastOptions={{ success: { duration: 4000 } }} />

      <form onSubmit={handleSubmit(submitValues)}
        className='m-1 p-10 xm:p-0 w-full mx-auto'
      >
        {stepsFields[currentStep - 2]}

        <div className='mt-8 pt-5'>
          <div className='flex justify-between'>

            {/*Prev Button */}
            <Button onClick={prev} type="button">
              <BsArrowLeft />
            </Button>

            {/*Next Button */}
            <Button
              onClick={next}
              type={currentStep === steps.length - 1 ? "submit" : "button"}
              disabled={currentStep > steps.length - 1 && true}
            >
              {currentStep === steps.length - 1 ? "Submit" : <BsArrowRight />}
            </Button>
          </div>
        </div>
      </form>
    </>

  )
}

export default Form