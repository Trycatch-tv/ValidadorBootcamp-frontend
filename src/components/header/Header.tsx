import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <header className="flex items-center border  min-h-[50px] py-2">
            <Navbar currentYear={2023} />
        </header>
    )
}

export default Header
