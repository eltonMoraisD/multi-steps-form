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
          <>
            <Input
              error={errors.firstName}
              register={register}
              name="firstName"
              type="text"
              placeholder="First name"
              defaultValue={users.firstName}
              onChange={(e) => { handleInputChange(e, clearErrors()) }}
            />
            <Input
              error={errors.lastName}
              register={register}
              name="lastName"
              type="text"
              placeholder="Last name"
              defaultValue={users.lastName}
              onChange={(e) => { handleInputChange(e, clearErrors()) }}
            />
            <Input
              error={errors.email}
              register={register}
              name="email"
              type="email"
              placeholder="Email"
              defaultValue={users.email}
              onChange={(e) => { handleInputChange(e, clearErrors()) }}
            />
          </>
        );
      case 3:
        return (
          <>

            <Input
              error={errors.address}
              register={register}
              name="address"
              type="text"
              placeholder="Address"
              defaultValue={users.address}
              onChange={(e) => { handleInputChange(e, clearErrors()) }}
            />
            <Input
              error={errors.city}
              register={register}
              name="city"
              type="text"
              placeholder="City"
              defaultValue={users.city}
              onChange={(e) => { handleInputChange(e, clearErrors()) }}
            />
            <Input
              error={errors.postcode}
              register={register}
              name="postcode"
              type="text"
              placeholder="Postcode"
              defaultValue={users.postcode}
              onChange={(e) => { handleInputChange(e, clearErrors()) }}
            />

            <ComboBox
              error={errors.country}
              register={register}
              name="country"
              type="text"
              placeholder="Country"
              defaultValue={users.country}
              onChange={(e) => { handleInputChange(e, clearErrors()) }}
            />
            <Input
              error={errors.phone}
              register={register}
              name="phone"
              type="text"
              placeholder="Phone"
              defaultValue={users.phone}
              onChange={(e) => { handleInputChange(e, clearErrors()) }}
            />
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