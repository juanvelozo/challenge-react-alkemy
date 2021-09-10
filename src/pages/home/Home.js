import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
export const Home = () => {
    return (
    <div className="container-fluid  sm:mt-1 p-5 user-select-none">
        <div>
            <div className=" text-center  p-3 w-100">
                <h1 className="font-weight-bolder text-light ">It's time to create your superhero party!</h1>
                <h3 className="bg-white border-none rounded-pill shadow-sm p-3">Reclute superheroes and villains from differents comics and universes to join your team!</h3>
            <Link to="/search" className="btn btn-danger mt-3 button">Go search!</Link>
            </div>
        </div>
    </div>
    )
}
