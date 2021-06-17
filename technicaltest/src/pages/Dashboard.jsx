import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import SideBar from '../components/SideBar'
import { useFetchApi } from '../hooks/useFetchApi' 
import { useHistory } from 'react-router-dom'
import Loading from './Loading'
import NotFound from './NotFound'


function Dashboard() {
    // const dispatch = useDispatch()
    const [dataCovid, loading, error] = useFetchApi('https://covid-19-tracking.p.rapidapi.com/v1')
    console.log(dataCovid, 'INI DATA COVID NYA');

    const history = useHistory()
    
    const handleLogout = () => {
        localStorage.clear()
        history.push('/')
    }

    if(loading) {
        return <Loading />
    }
    if(error) {
        return <NotFound />
    }

    return (
        <div className="h-screen w-screen bg-gray-200 flex flex-row">
            <div className="h-screen bg-gray-200 flex w-screen flex-row">
            <nav className="h-full w-80 bg-gray-200" style={{ width: '20' }}>
                <div className="w-full h-1/6">
                    <div className="h-screen bg-yellow-500">
                        <div className="w-full h-full px-5">
                            <div className=" w-72 pt-32 mb-20">
                                <h1 className="text-center cursor-pointer text-white font-semibold text-4xl">
                                    Covid-19
                                </h1>
                            </div>
                            <div className=" items-center">
                                <div className="m-10">
                                    <p className="text-2xl cursor-pointer hover:text-gray-900 focus:text-gray-900 transition hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline rounded-full text-white">Dashboard</p>
                                </div>
                                <div className="m-10">
                                    <p className="text-2xl text-white hover:text-gray-900 focus:text-gray-900 transition hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline rounded-full cursor-pointer">About</p>
                                </div>
                                <div className="m-10">
                                    <p className="text-2xl cursor-pointer hover:text-gray-900 focus:text-gray-900 transition hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline rounded-full text-white">Contact</p>
                                </div>
                                <div className="flex flex-col pt-10">
                                    <p onClick={() => handleLogout()} className="text-2xl hover:text-gray-900 focus:text-gray-900 transition hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline rounded-full text-white cursor-pointer">Logout</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="">
                <h1>hello world</h1>
            </div>
            </div>
        </div>
    )
}

export default Dashboard
