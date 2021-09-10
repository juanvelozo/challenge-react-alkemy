import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Navbar } from '../components/Navbar/NavBar'
import { Home } from '../pages/home/Home'
import SearchScreen from '../pages/searchScreen/SearchScreen'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/search" component={SearchScreen}></Route>
            </Switch>  
        </>
    )
}
