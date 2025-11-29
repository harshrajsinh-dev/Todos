import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SiteContext } from '../Context/SiteContext';

const LoginUser = () => {
        const navigation = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(import.meta.env.VITE_BASE_URL)
    useEffect(() => {
        console.log(register)
    }, [register]);

    const handleClick = async (data) => {
        axios.post(`${import.meta.env.VITE_BASE_URL}api/user/login`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        )
            .then(function (response) {
                // console.log("Login Successful ", response);
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("userName", response.data.userName);
                navigation("/");
            })
            .catch(function (error) {
                console.log(error);
            });

        console.log(data);
    }
    return (
        <div className='h-screen flex justify-center items-center bg-gray-200'>
            <div className='w-1/3 p-5 bg-white rounded-lg hover:shadow-lg transition-all flex flex-col gap-6'>
                <form onSubmit={handleSubmit((data) => {
                    console.log("Submitted");
                    handleClick(data);
                })}>

                    <div className="flex flex-col gap-4 ">
                        <input {...register('email', { required: true })} type="email" placeholder='User Email' className='border p-2 rounded-md' />
                        <input {...register('passWord', { required: true })} type="password" placeholder='User Password' className='border p-2 rounded-md' />
                    </div>

                    <div className="lower flex justify-center mt-5">
                        <button
                            className='bg-gray-900 text-white hover:text-gray-900 hover:bg-white border-white hover:border-gray-900 border py-2 px-7 rounded-md cursor-pointer transition-all'
                        >
                            LoginUser
                        </button>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default LoginUser;
