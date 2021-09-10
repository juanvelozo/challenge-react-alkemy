import React, { useContext, useState } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../auth/types'

export const LogoutButton = () => {
    const [user, setUser] = useState(null);
    const {dispatch} = useContext(AuthContext)
    const handleOut = (e) => {
        dispatch({
            type: types.logout
        })
        setUser(user)
        
    }
    return (
        <>
            <button onClick={handleOut} className="btn btn-danger">Logout</button>
        </>
    )
}
