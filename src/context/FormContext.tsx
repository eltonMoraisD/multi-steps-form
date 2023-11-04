"use client"
import { useState, createContext } from 'react'

import { IFormContext, IUser } from '@/types/types'

export const FormContext = createContext<IFormContext | null>(null);

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setLoading] = useState<boolean>(true)
  const [userApi, setUsersApi] = useState<IUser>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postcode: "",
    country: "",
  })


  const updateUser = (updatedUserData: Partial<IUser>) => {
    setUsersApi((prevData) => ({
      ...prevData,
      ...updatedUserData,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, clear: any) => {
    const { name, value } = e.target;
    updateUser({ [name]: value });
    clear
  };

  return (
    <FormContext.Provider value={({ userApi, handleInputChange, setUsersApi, isLoading, setLoading, updateUser })}>
      {children}
    </FormContext.Provider>
  )
}
