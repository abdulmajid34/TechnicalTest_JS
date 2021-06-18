import React, { useState } from 'react'
// import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { postLogin } from '../store/actions/action'

function LoginPage() {
    const history = useHistory()
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        setLogin({
            ...login,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        postLogin(login.email, login.password)
        .then((response) => {
            if(localStorage.getItem('access_token')) {
                history.push('/dashboard')
                console.log("berhasil login");
            } else {
                console.log("tidak dapat login");
            }
        }) 
    }

    return (
        <div>
            <div className="flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500  h-screen select-none">
                <div className="flex flex-col -mt-32 bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-xl shadow-2xl w-full max-w-md  border-l-4 border-blue-600">
                    <div className="font-medium self-center text-xl sm:text-2xl uppercase w-60 text-center bg-gradient-to-r from-green-400 to-blue-500 shadow-2xl p-6 rounded-full text-white">Login</div>
                    <div className="mt-10">
                        <form onSubmit={(event) => handleSubmit(event)} method="post">
                            <div className="relative w-full mb-3">
                                <input type="email" data-testid="form-error" aria-label="email" className="border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" required name="email" value={login.email} onChange={(event) => handleChange(event)} placeholder="email" />
                            </div>
                            <div className="relative w-full mb-3">
                                <input type="password" data-testid="form-error" aria-label="password" className="border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" value={login.password} onChange={(event) => handleChange(event)} required name="password" placeholder="password" />
                            </div>
                            <div className="text-center mt-6">
                                <input type="submit" className="p-3 rounded-lg bg-blue-600 outline-none text-white shadow w-32 justify-center focus:bg-blue-700 hover:bg-blue-500" value="Login" name="submit"  />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
