"use client"
import { useState, createContext, useContext } from 'react'

import { IFormContext, IUser } from '@/types/types'

const FormContext = createContext<IFormContext | null>(null);

const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
}

const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setLoading] = useState<boolean>(true)
  const [userApi, setUsersApi] = useState<IUser>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
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


export { useFormContext, FormProvider, FormContext }