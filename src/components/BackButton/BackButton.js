import React from 'react'
import { useHistory } from 'react-router-dom'

export const BackButton = () => {
    // const [path, setPath] = useState(false)
    const history = useHistory()
    const handleClick = () => {
        history.goBack()
    }
    const value = () => {
        return false
    }
    return (
        <>
            <button onClick={handleClick} className={value ? "btn btn-light" : "d-none"}>Home</button>
        </>
    )
}
