import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Navbar } from '../components/Navbar/NavBar'
import { Home } from '../pages/home/Home'
import SearchScreen from '../pages/searchScreen/SearchScreen'
import { TeamsScreen } from '../pages/teams/TeamsScreen'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/search" component={SearchScreen}></Route>
                <Route exact path="/teams" component={TeamsScreen}></Route>
            </Switch>  
        </>
    )
}
