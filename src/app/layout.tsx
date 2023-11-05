import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { FormProvider } from '@/context/FormContext'
import { StepsProvider } from '@/context/StepsContext'
import { ComboboxProvider } from '@/context/ComboboxContext'

import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Multiple Form steps',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FormProvider>
          <StepsProvider>
            <ComboboxProvider>
              <Header />
              {children}
            </ComboboxProvider>
          </StepsProvider>
        </FormProvider>
      </body>
    </html>
  )
}
