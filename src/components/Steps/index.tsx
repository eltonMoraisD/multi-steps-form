import React from 'react'
import "./style.css"


export default function Steps() {
  const steps = ["fetch user", "user", "adress"]
  return (
    <>
      <div className='flex  justify-center mt-8 mb-6'>
        <div className='flex  items-center'>
          {steps.map((step, i) => (
            <div key={i} className={`custom-step mx-2 active`}>
              <div className='step'>{i + 1}</div>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
