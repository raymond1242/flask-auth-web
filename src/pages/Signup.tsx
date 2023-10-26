import React from 'react'
import { ApiService } from '../services/api.service'

const SignUpPage:React.FC = () => {
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const request = {
            name: e.currentTarget.username.value,
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value
        }

        ApiService.signup(request).then(res => console.log(res))
    }

    return (
        <>
        <div className='text-2xl font-semibold my-4'>Sign up page</div>
        <form onSubmit={handleSubmit} className='flex flex-col px-4'>
            <input className='my-2 p-1 rounded-lg' type='text' name='username' title='name' />
            <input className='my-2 p-1 rounded-lg' type='text' name='email' title='name' />
            <input className='my-2 p-1 rounded-lg' type="password" name='password' />
            <input className='my-2 p-1 rounded-lg bg-green-500 cursor-pointer' type='submit' />
        </form>
        </>
    )
}

export default SignUpPage
