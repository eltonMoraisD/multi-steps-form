"use client"
import Form from "@/components/Form"
import Steps from "@/components/Steps"
import Wrapper from "@/components/Wrapper"
import { fetchUser } from "@/utils/fetchUser"
import { useEffect, useState } from "react"

export default function Home() {
  const [users, setUsers] = useState({})

  useEffect(() => {
    const getUserData = async () => {

      try {
        const { data } = await fetchUser()
        setUsers(data)
      } catch (error: any) {
        throw new Error(error)
      }

    }
    getUserData()
  }, [])

  console.log(users)
  return (
    <div className="ml-4 mr-4">
      <Wrapper>
        <Steps />
        <Form />
      </Wrapper>
    </div>
  )
}
