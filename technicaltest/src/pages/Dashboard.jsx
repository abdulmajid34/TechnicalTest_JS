import React, { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import SideBar from '../components/SideBar'
import { useFetchApi } from '../hooks/useFetchApi' 
import { useHistory, Link } from 'react-router-dom'
import Loading from './Loading'
import NotFound from './NotFound'
import { Bar, defaults } from 'react-chartjs-2';


function Dashboard() {
    // const dispatch = useDispatch()
    const [dataCovid, loading, error] = useFetchApi('http://localhost:5000/results')
    // console.log(dataCovid, 'INI DATA COVID NYA');

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

    // defaults.global.tooltips.enabled = false
    defaults.plugins.legend.position = 'right';

    let dataTotalCase;
    dataCovid.map(data => {
        dataTotalCase = data.confirmed
    })

    let dataDeatchCase;
    dataCovid.map(death => {
        dataDeatchCase = death.deaths
    })

    let dataRecoveredCase;
    dataCovid.map(recover => {
        dataRecoveredCase = recover.recovered
    })

    let dataPopulate;
    dataCovid.map(populate => {
        dataPopulate = populate.population
    })


    return (
        <div className="h-screen w-screen bg-gray-200 flex flex-row">
            <div className="h-screen bg-gray-200 flex w-screen flex-row">
            <nav className="h-full w-80 bg-gray-200" style={{ width: '20' }}>
                <div className="w-full h-1/6">
                    <div className="h-screen bg-yellow-500">
                        <div className="w-full h-full px-5">
                            <div className=" w-72 pt-32 mb-20">
                                <Link to="/dashboard">
                                <h1 className="text-center cursor-pointer text-white font-semibold text-4xl">
                                    Covid-19
                                </h1>
                                </Link>
                            </div>
                            <div className=" items-center">
                                <div className="m-10">
                                    <Link to="/dashboard" >
                                    <p className="text-2xl cursor-pointer hover:text-gray-900 focus:text-gray-900 transition hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline rounded-full text-white">Dashboard</p>
                                    </Link>
                                </div>
                                <div className="m-10">
                                    <Link to="/about" >
                                    <p className="text-2xl text-white hover:text-gray-900 focus:text-gray-900 transition hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline rounded-full cursor-pointer">About</p>
                                    </Link>
                                </div>
                                <div className="m-10">
                                    <Link to="/contact" >
                                    <p className="text-2xl cursor-pointer hover:text-gray-900 focus:text-gray-900 transition hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline rounded-full text-white">Contact</p>
                                    </Link>
                                </div>
                                <div className="flex flex-col pt-10">
                                    <p onClick={() => handleLogout()} className="text-2xl hover:text-gray-900 focus:text-gray-900 transition hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline rounded-full text-white cursor-pointer">Logout</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            
            <div className="h-3/6 w-full ml-80 mr-72 shadow-2xl flex flex-row justify-center flex-nowrap overflow-x-auto rounded-2xl mt-40">
                <div className="h-full flex flex-col p-5 justify-center items-center rounded-l-2xl rounded-3xl bg-gray-50 bg-opacity-80 py-5 w-full">
                <div className="text-lg"> data Grafik Covid-19
                    <div className="w-full flex justify-center">
                    <Bar
                        data={{
                            labels: [
                            'Today'
                        ],
                        datasets: [
                            {
                            label: 'TotalCase',
                            data: [dataTotalCase],
                            backgroundColor: 'blue',
                            borderColor: 'blue',
                            borderWidth: 1,
                            },
                            {
                            label: 'TotalDeath',
                            data: [dataDeatchCase],
                            backgroundColor: 'red',
                            borderColor: 'red',
                            },
                            {
                                label: 'TotalRecovered',
                                data: [dataRecoveredCase],
                                backgroundColor: 'green',
                                borderColor: 'green',
                            },
                            {
                                label: 'Population',
                                data: [dataPopulate],
                                backgroundColor: 'yellow',
                                borderColor: 'yellow',
                            },
                        ],
                        }}
                        height={200}
                        width={600}
                        options={{
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [
                            {
                                ticks: {
                                beginAtZero: true,
                                },
                            },
                            ],
                        },
                        legend: {
                            labels: {
                            fontSize: 25,
                            },
                        },
                        }}
                    />
                    </div>
                </div>
                </div>
            </div>
            
            

        </div>
        
    </div>
)}

export default Dashboard

