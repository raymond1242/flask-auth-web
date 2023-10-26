import React from 'react'
import { ApiService } from '../services/api.service'
import { useNavigate } from 'react-router-dom'

const LoginPage:React.FC = () => {
    const navigate = useNavigate()

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const request = {
            email: String(e.currentTarget.email.value),
            password: String(e.currentTarget.password.value)
        }
        ApiService.login(request).then(res => {
            localStorage.setItem('token', res.token)
            navigate('/')
            alert('Login success')
        })
    }

    return (
        <>
        <div className='text-2xl font-semibold my-4'>Login page</div>
        <form onSubmit={handleSubmit} className='flex flex-col px-4'>
            <input className='my-2 p-1 rounded-lg' type='text' name='email' title='name' />
            <input className='my-2 p-1 rounded-lg' type="password" name='password' />
            <input className='my-2 p-1 rounded-lg bg-green-500 cursor-pointer' type='submit' />
        </form>
        </>
    )
}

export default LoginPage
