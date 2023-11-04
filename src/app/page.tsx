"use client"
import { useEffect, useContext } from "react"
import { fetchUser } from "@/utils/fetchUser"

import { IFormContext, IStepsContext } from "@/types/types"
import { StepsContext } from "@/context/StepsContext"
import { FormContext } from '../context/FormContext'

import Spinner from "@/components/Spinner"
import Form from "@/components/Form"
import Steps from "@/components/Steps"
import Wrapper from "@/components/Wrapper"

export default function Home() {
  const formContex = useContext(FormContext)
  const stepContext = useContext(StepsContext)

  const { userApi, isLoading, setLoading, updateUser } = formContex as IFormContext
  const { moveToNextStep, currentStep, } = stepContext as IStepsContext
  useEffect(() => {
    const getUserData = async () => {
      setLoading(true)

      try {
        const { data } = await fetchUser()
        updateUser(data)
      } catch (error: any) {
        setLoading(false)
        throw new Error(error)

      } finally {
        moveToNextStep()
        setLoading(false);
      }
    }
    if (currentStep === 1) {
      getUserData()
    }

  }, [currentStep])

  return (
    <div className="ml-4 mr-4">
      <Steps />
      <Wrapper>
        {isLoading ?
          <div className="flex flex-col justify-center items-center ">
            <Spinner />
            <p className="text-3xl text-blue-900 font-bold antialiased mt-6">Fetching User...</p>
          </div> :
          <Form users={userApi} />}
      </Wrapper>
    </div>
  )
}
