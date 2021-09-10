import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import loginService from '../../auth/services/login'
import { types } from '../../auth/types'


export const LoginPage = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const {dispatch} = useContext(AuthContext);
    const handleLogin = async (e) => {
        e.preventDefault()
        try{
            const user = await loginService.login({email, password})
            dispatch({
                type: types.login,
                payload: {
                    email: email,
                    password: password,
                }
            })
            setUser(user)
            history.replace('/')
        }catch(error){
            console.log(error)
        }
    }
    console.log(user)
    
    return (
        <>
            <div className="container-fluid user-select-none">   
                <div className="container">
                <h1 className="font-weight-bolder text-light">Login</h1>
                <hr/>
                <div className="login-form justify-content-center">
                    <form onSubmit={handleLogin}>
                        <div className="form-group ">
                            <input type="email" className="form-control" placeholder="Email" onChange={({target})=>setEmail(target.value)} autoComplete="false"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" onChange={({target})=>setPassword(target.value)}/>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-dark w-50 ">Login</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </>
    )
}
