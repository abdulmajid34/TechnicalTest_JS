import axios from 'axios'
import React, { useState, useEffect } from 'react'
// import axios from 'axios'


export function useFetchApi(url) {
    // console.log(url, 'INI URL');
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch(url, {
        "method": "GET"
        // "headers": {
        //     "x-rapidapi-key": "0232389a9emshff16a8dfb221448p1ef225jsn92207a695aa0",
        //     "x-rapidapi-host": "covid-19-tracking.p.rapidapi.com"
        // }
        })
        .then(response => {
            // console.log(response, 'response 1');
            return response.json()
        })
        .then(response => {
            console.log(response, 'INI DATA NYA');
            // let filtered = [...response]
            // const filtered = response.shift()
            // console.log(filtered, 'INI FILTER');
            setData(response)
        })
        .catch(err => {
            setError(err);
        })
        .finally((_) => {
            setLoading(false)
        })
    }, [url])
    
    return [data, loading, error]
}