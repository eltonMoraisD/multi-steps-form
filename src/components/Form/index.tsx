import React, { FormEvent } from 'react'
import Input from '../Input'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import Button from '../Button'
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchema } from './schemaValidations'
import { z } from 'zod'
import { IInputs, IUser } from '@/types/types'


export default function Form() {

  const { register, handleSubmit, formState: { errors } } = useForm<IUser>({ resolver: zodResolver(formSchema) })

  const submitValues: SubmitHandler<IUser> = (data) => {
    console.log("Submit", data);

  }

  return (
    <form onSubmit={handleSubmit(submitValues)} className='p-10 max-w-none w-full	 mx-auto'>
      <Input register={register} name="firstName" type='text' placeholder="First name" />
      {
        errors?.firstName?.message && (<p className='mt-2 text-sm text-red-400'>{errors.firstName.message}</p>)
      }
      <Input register={register} name="lastName" type='text' placeholder="Last name" />
      {
        errors?.lastName?.message && (<p className='mt-2 text-sm text-red-400'>{errors.lastName.message}</p>)
      }
      <Input register={register} name="email" type='email' placeholder="email" />
      {
        errors?.email?.message && (<p className=' w-full mt-2 text-sm text-red-400'>{errors.email.message}</p>)
      }
      <div className='mt-8 pt-5'>
        <div className='flex justify-between'>
          {/*Prev Button */}
          <Button type="submit">
            <BsArrowLeft />
          </Button>

          {/*Next Button */}
          <Button
            type='submit'
          >
            <BsArrowRight />
          </Button>
        </div>
      </div>
    </form >
  )
}
