"use client"
import Link from 'next/link'
import React from 'react'

const ClientPage = () => {
  const [counter, setCounter] = React.useState(0)
  console.log('client render')

  return (
    <div>
      <h1 className='text-7xl mb-4 font-bold'>{counter}</h1>
      <button className='cursor-pointer btn btn-primary text-2xl' onClick={() => setCounter(counter - 1)}>-</button>
      <button className='cursor-pointer btn btn-primary text-2xl m-3' onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  )
}

export default ClientPage
