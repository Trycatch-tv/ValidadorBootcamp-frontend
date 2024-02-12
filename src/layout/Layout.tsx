import React from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Home } from '@/pages/home'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className='relative min-h-screen'>
      {/* Header */}
      <Header />
      <Home />
      {/* Main */}
      <main className="container container-lg pt-16 pb-36">
        {/* Content */}
        {children}
      </main>
      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default Layout
