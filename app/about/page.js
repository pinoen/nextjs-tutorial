import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
  return (
    <div>
      <h1 className='text-7xl'>AboutPage</h1>
      <Link href="/" className='text-2xl'>Home</Link>
      <Link href="/about/info" className='text-2xl'>Info</Link>
    </div>
  )
}

export default AboutPage
