import React from 'react'
import { BackButton } from '../BackButton/BackButton'
import { LogoutButton } from '../Logout/LogoutButton'

export const Navbar = () => {
    return (
        <>
            <nav className="p-3"> 
                <BackButton/>
                <LogoutButton/> 
            </nav>
        </>
    )
}
