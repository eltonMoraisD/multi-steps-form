"use client"
import { useEffect } from "react"

import { useStepsContext } from "@/context/StepsContext"
import { useFormContext } from '../context/FormContext'

import { fetchUser } from "@/utils/fetchUser"

import Spinner from "@/components/Spinner"
import Form from "@/components/Form"
import Steps from "@/components/Steps"
import Wrapper from "@/components/Wrapper"

export default function Home() {

  const { userApi, isLoading, setLoading, updateUser } = useFormContext()
  const { moveToNextStep, currentStep, } = useStepsContext()

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
