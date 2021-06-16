import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

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
        axios({
            method: 'POST',
            url: 'https://ayodhya-dev.qlue.id/api/auths/login',
            data: {
                email: login.email,
                password: login.password
            }
        })
        .then((response) => {
            console.log(response, 'INI DATA NYA');
            localStorage.setItem('id', response.data.id)
            localStorage.setItem('access_token', response.data.access_token)
            history.push('/dashboard')
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <div className="flex flex-col items-center justify-items-center h-screen bg-indigo-600">
            <div className="">
                <div>
                    <div>
                        <form onSubmit={(event) => handleSubmit(event)} method="post">
                            <div>
                                <input type="email" required name="email" value={setLogin.email} onChange={(event) => handleChange(event)} placeholder="email" />
                            </div>
                            <div>
                                <input type="password" required name="password" placeholder="password" />
                            </div>
                            <div>
                                <input type="submit" value="Login" name="submit"  />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
