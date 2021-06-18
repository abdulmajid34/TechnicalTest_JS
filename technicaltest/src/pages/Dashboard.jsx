import React, { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import SideBar from '../components/SideBar'
import { useFetchApi } from '../hooks/useFetchApi' 
import { useHistory } from 'react-router-dom'
import Loading from './Loading'
import NotFound from './NotFound'
import { Bar, defaults } from 'react-chartjs-2';


function Dashboard() {
    // const dispatch = useDispatch()
    const [dataCovid, loading, error] = useFetchApi('http://localhost:5000/results')
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

    // defaults.global.tooltips.enabled = false
    defaults.plugins.legend.position = 'right';

    let dataTotalCase;
    dataCovid.map((data) => {
        dataTotalCase = data.confirmed
    })

    let dataDeatchCase;
    dataCovid.map((death) => {
        dataDeatchCase = death.deaths
    })

    let dataRecoveredCase;
    dataCovid.map((recover) => {
        dataRecoveredCase = recover.recovered
    })


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
                <div class=" bg-gray-200 flex">
                    <div class="relative">
                        <div class="absolute top-4"> <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i> </div> <input type="text" class="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="Search anything..." />
                        <div class="absolute top-2 right-2"> <button class="h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600">Search</button> </div>
                    </div>
                </div>
                </div>
            <div className="container">
                <div className="flex flex-row">
                <div className=" flex-col justify-start mt-20">
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
                    ],
                    }}
                    height={400}
                    width={400}
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
    )
}

export default Dashboard

// data={{
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [
//         {
//         label: 'Meniggal',
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: [
//             'rgba(255, 99, 132, 0.2)',
//             'rgba(54, 162, 235, 0.2)',
//             'rgba(255, 206, 86, 0.2)',
//             'rgba(75, 192, 192, 0.2)',
//             'rgba(153, 102, 255, 0.2)',
//             'rgba(255, 159, 64, 0.2)',
//         ],
//         borderColor: [
//             'rgba(255, 99, 132, 1)',
//             'rgba(54, 162, 235, 1)',
//             'rgba(255, 206, 86, 1)',
//             'rgba(75, 192, 192, 1)',
//             'rgba(153, 102, 255, 1)',
//             'rgba(255, 159, 64, 1)',
//         ],
//         borderWidth: 1,
//         },
//         // {
//         //   label: 'Quantity',
//         //   data: [47, 52, 67, 58, 9, 50],
//         //   backgroundColor: 'orange',
//         //   borderColor: 'red',
//         // },
//         ],
//         }}
//         height={400}
//         width={600}
//         options={{
//         maintainAspectRatio: false,
//         scales: {
//             yAxes: [
//             {
//                 ticks: {
//                 beginAtZero: true,
//                 },
//             },
//             ],
//         },
//         legend: {
//             labels: {
//             fontSize: 25,
//             },
//         },
//         }}