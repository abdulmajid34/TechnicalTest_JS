import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useFetchApi } from '../hooks/useFetchApi'
import Loading from './Loading'
import NotFound from './NotFound'

function About() {
    const history = useHistory()
    const dataCovidCountry = useSelector(state => state.tableData)
    console.log(dataCovidCountry, 'INI DATA COVID NYA');
    const [dataCovid, loading, error] = useFetchApi('https://covid-api.mmediagroup.fr/v1/cases')
    console.log(dataCovid, 'INI DATA COUNTRY');
    
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
            
            <div class="h-20 bg-gray-200">
                <div class="relative mt-20">
                    <div class="absolute"> <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i> </div> <input type="text" class="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="Search anything..." />
                    <div class="absolute top-2 right-2"> <button class="h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600">Search</button> </div>
                </div>
            </div>

            <div className="h-3/6 w-full ml-80 mr-72 shadow-2xl flex flex-row justify-center flex-nowrap overflow-x-auto rounded-2xl mt-40">
                <div className="h-full flex flex-col p-5 justify-center items-center rounded-l-2xl rounded-3xl bg-gray-50 bg-opacity-80 py-5 w-full">
                <div class="flex flex-col h-screen">
                    <div class="flex-grow overflow-auto">
                    <table class="relative w-full border">
                        <thead>
                        <tr>
                            <th class="sticky top-0 px-6 py-3 text-red-900 bg-red-300">Country</th>
                            <th class="sticky top-0 px-6 py-3 text-red-900 bg-red-300">Death</th>
                            <th class="sticky top-0 px-6 py-3 text-red-900 bg-red-300">Recovered</th>
                            <th class="sticky top-0 px-6 py-3 text-red-900 bg-red-300">confirmed</th>
                            <th class="sticky top-0 px-6 py-3 text-red-900 bg-red-300">updated</th>
                        </tr>
                        </thead>
                        <tbody class="divide-y bg-blue-200">
                        <tr>
                            <td class="px-6 py-4 text-center">dataCovid</td>
                            <td class="px-6 py-4 text-center">53753</td>
                            <td class="px-6 py-4 text-center">1771220</td>
                            <td class="px-6 py-4 text-center">1950276</td>
                            <td class="px-6 py-4 text-center">2021/06/17 17:22:04+00</td>
                        </tr>
                        
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default About
