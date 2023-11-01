import React from 'react'
import Input from '../Input'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import Button from '../Button'

export default function Form() {
  return (
    <form className='container max-w-max mx-auto'>
      <Input type='text' placeholder="First name" />
      <Input type='text' placeholder="Last name" />
      <Input type='email' placeholder="email" />

      <div className='mt-8 pt-5'>
        <div className='flex justify-between'>
          <Button type="submit">
            <BsArrowLeft />
          </Button>

          <Button
            type='submit'
          >
            <BsArrowRight />
          </Button>
        </div>
      </div>
    </form>
  )
}
