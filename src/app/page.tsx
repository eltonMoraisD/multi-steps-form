"use client"
import Steps from "@/components/Steps"
import { fetchUser } from "@/utils/fetchUser"
import { useEffect, useState } from "react"

export default function Home() {
  const [users, setUsers] = useState({})

  useEffect(() => {
    const getUserData = async () => {
      const { data } = await fetchUser()
      setUsers(data)
    }
    getUserData()
  }, [])

  console.log(users)
  return (
    <div className="">
      <Steps />
    </div>
  )
}
