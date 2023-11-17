import React from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'


interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className='relative min-h-screen'>
      {/* Header */}
      <Header />
      {/* Main */}
      <main className="container container-lg pt-20 pb-20">
        {/* Content */}
        {children}
      </main>
      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default Layout
