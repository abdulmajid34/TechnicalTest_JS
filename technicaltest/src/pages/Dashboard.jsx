import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFetchApi } from '../hooks/useFetchApi' 
import Loading from './Loading'
import NotFound from './NotFound'


function Dashboard() {
    // const dispatch = useDispatch()
    const [dataCovid, loading, error] = useFetchApi('https://covid-19-tracking.p.rapidapi.com/v1')
    console.log(dataCovid, 'INI DATA COVID NYA');

    if(loading) {
        return <Loading />
    }
    if(error) {
        return <NotFound />
    }

    return (
        <div>
            <h1>INI DI DASHBOARD</h1>
        </div>
    )
}

export default Dashboard
