import React, { useContext } from 'react'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'
import { LoginPage } from '../pages/login/LoginPage'
import { DashboardRoutes } from './DashboardRoutes'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

export const AppRouter = () => {
    const {user} = useContext(AuthContext);
    return (
        <>
            <Router>
                <Switch>
                    <PublicRoutes exact path="/login" component={LoginPage} isAuthenticated={user.logged}/>
                    <PrivateRoutes path="/" component={DashboardRoutes} isAuthenticated={user.logged}/>
                </Switch>
            </Router>
        </>
    )
}
