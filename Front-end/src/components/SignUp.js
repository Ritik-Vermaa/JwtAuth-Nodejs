"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa6";


const SignUp = () => {
    const [name, setName] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("");
     return (
            <>
                <div
                    className="grid grid-cols-[30%,1fr]"
                >
                    <div className="bg-accent h-screen grid place-items-center">
                        <div className="text-center w-full text-white space-y-8">
                            <h2 className="font-bold text-4xl">Welcome Back!</h2>
                            <div className="text-[#eeeeee] w-fit mx-auto">
                                <p>To keep connected with us please</p>
                                <p>please login with your personal info</p>

                                <Link href="/Login">
                                    <button className="uppercase px-4 py-2 w-[100%] rounded-full border-2 mt-8">
                                        Login
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className=' h-screen grid place-items-center'>
                        <div className=' text-center'>
                            <h1 className='text-accent font-bold text-4xl'>Create Account</h1>
                            <div className='flex items-center gap-4 pt-8 w-fit mx-auto'>
                                <div className='icon_wrapper'>
                                    <FaFacebookF />
                                </div>
                                <div className='icon_wrapper'>
                                    <FaGoogle />
                                </div>
                                <div className='icon_wrapper'>
                                    <FaInstagram />
                                </div>
                            </div>

                            <p className='pt-8 text-[13px] text-gray-400'>
                                Or Use Your email account for registration
                            </p>

                            <form className='flex w-[300px] mx-auto flex-col pt-2 gap-2'>
                                <input value={name}
                                    onChange={(e) => setName(e.target.name)}
                                    type="text "
                                    placeholder='Name' 
                                    className="input_style"
                                    />
                                <input value={email}
                                    onChange={(e) => setemail(e.target.email)}
                                    type="email"
                                    placeholder='Email' 
                                    className="input_style"
                                    />
                                <input value={password}
                                    onChange={(e) => setpassword(e.target.password)}
                                    type="password"
                                    placeholder='Password' 
                                    className="input_style"
                                    />

                                    <button className=' uppercase bg-accent hover:bg-accentDark px-4 py-2 text-white mt-4'>Sign Up</button>

                            </form>
                        </div>

                    </div>
                </div>

            </>
        )
}

export default SignUp